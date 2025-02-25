from rest_framework import serializers
from .models import Product, Category, Order, OrderItem, Cart, CartItem
from django.contrib.auth.models import User

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email"]

# Category Serializer
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

# Product Serializer
class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)  # Nested category details
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), source="category", write_only=True
    )  # Allow category selection via ID

    class Meta:
        model = Product
        fields = ["id", "name", "description", "price", "stock", "image", "category", "category_id", "created_at"]

# Order Item Serializer
class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)  # Nested product details
    product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(), source="product", write_only=True
    )  # Allow product selection via ID

    class Meta:
        model = OrderItem
        fields = ["id", "order", "product", "product_id", "quantity", "price"]

# Order Serializer
class OrderSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)  # Display user details
    items = OrderItemSerializer(many=True, read_only=True)  # Include order items

    class Meta:
        model = Order
        fields = ["id", "user", "created_at", "total_price", "is_paid", "items"]

# Cart Item Serializer
class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)  # Nested product details
    product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(), source="product", write_only=True
    )  # Allow product selection via ID

    class Meta:
        model = CartItem
        fields = ["id", "cart", "product", "product_id", "quantity"]

# Cart Serializer
class CartSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)  # Display user details
    items = CartItemSerializer(many=True, read_only=True)  # Include cart items

    class Meta:
        model = Cart
        fields = ["id", "user", "created_at", "items"]
