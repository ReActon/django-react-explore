from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import NationaliseDataSerializer
from .models import NationaliseData
import requests

def front(request):
    context = { }
    return render(request, "index.html", context)

# @api_view(['GET', 'POST'])
# def getNationaliseData(request):
#     if request.method == 'GET':
#         nationaliseData = NationaliseData.objects.all()
#         serializer = NationaliseDataSerializer(nationaliseData, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = NationaliseDataSerializer(data=request.data)

#         if serializer.is_valid():
#             url = 'https://api.nationalize.io/?name={}'
#             name = 'ryan'

#             r = requests.get(url.format(name)).json()

#         # print(r)
#             country_prob1 = {
#                 'name': r['name'],
#                 'country_list': r['country'],
#             }
#             country_list =  r['country']

#             country_prob = {
#                 'first_country': country_list[0],
#                 'second_country': country_list[1],
#                 'third_country': country_list[2],
#             }
#             perc = country_prob['first_country']['probability'] * 100
#             print('You are likely from {} with a probability of {}'.format(country_prob['first_country']['country_id'], perc))
#             serializer.save()
#             return Response(status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
       
#         # return render(request, 'backend.html')
#         return Response(serializer.data)
#     # else:
#     #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)