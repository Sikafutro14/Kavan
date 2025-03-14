"""
URL configuration for kavan project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from .views import shop_home  # Ensure the home view is imported




urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),  # If you have an API app
    path('shop/', include('shop.urls')),  # If you have the shop app
    path('', shop_home, name='home'),  # Root URL pattern
    path('api/', include('users.urls'))
    # Add more URL patterns here as needed
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
