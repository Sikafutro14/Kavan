from rest_framework.response import Response
from rest_framework.decorators import api_view
from api.models import Product
from shop.serializers import ProductSerializer

from django.http import JsonResponse

def api_home(request):
    return JsonResponse({"message": "Welcome to the API!"})


@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
