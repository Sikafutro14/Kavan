from django.urls import path
from . import views  

from .views import (
    UserListView, UserDetailView,
    ProductListView, ProductDetailView,
    CategoryListView, CategoryDetailView,
    OrderListView, OrderDetailView,
    OrderItemListView, OrderItemDetailView,
    CartListView, CartDetailView,
    CartItemListView, CartItemDetailView
)

urlpatterns = [
    path('', views.shop_home, name='shop_home'),  

    # User Routes
    path("users/", UserListView.as_view(), name="user-list"),
    path("users/<int:pk>/", UserDetailView.as_view(), name="user-detail"),

    # Category Routes
    path("categories/", CategoryListView.as_view(), name="category-list"),
    path("categories/<int:pk>/", CategoryDetailView.as_view(), name="category-detail"),

    # Product Routes
    path("products/", ProductListView.as_view(), name="product-list"),
    path("products/<int:pk>/", ProductDetailView.as_view(), name="product-detail"),

    # Order Routes
    path("orders/", OrderListView.as_view(), name="order-list"),
    path("orders/<int:pk>/", OrderDetailView.as_view(), name="order-detail"),

    # Order Item Routes
    path("order-items/", OrderItemListView.as_view(), name="order-item-list"),
    path("order-items/<int:pk>/", OrderItemDetailView.as_view(), name="order-item-detail"),

    # Cart Routes
    path("carts/", CartListView.as_view(), name="cart-list"),
    path("carts/<int:pk>/", CartDetailView.as_view(), name="cart-detail"),

    # Cart Item Routes
    path("cart-items/", CartItemListView.as_view(), name="cart-item-list"),
    path("cart-items/<int:pk>/", CartItemDetailView.as_view(), name="cart-item-detail"),
]
