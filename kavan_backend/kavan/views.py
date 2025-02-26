from django.shortcuts import render
from shop.models import Category, Product

def shop_home(request):
    # Fetch products and categories
    products = Product.objects.all()
    categories = Category.objects.all()
    
    # Return a rendered template with products and categories
    return render(request, 'shop/shop_home.html', {'products': products, 'categories': categories})
