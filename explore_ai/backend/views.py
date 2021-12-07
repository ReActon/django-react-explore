from django.shortcuts import render
import requests
from django.http import JsonResponse

def index(request, name):
    '''
    Uses the requests library to get relevant information from the Nationalize API.
    This information is used to build a JSON object to be passed back to the front end.
    '''

    if name == '':
        return 
    url = 'https://api.nationalize.io/?name={}'
    nameis = name 

    r = requests.get(url.format(nameis)).json()

    country_list =  r['country']

    country_info = {
        'first_country': country_list[0],
        'second_country': country_list[1],
        'third_country': country_list[2],
    }
    '''
    {
        "name": "ryan"
        "countries": ["CA", "UK", "NZ"]
        "probs": [0.17, x, y]
    }
    '''

    code_list = []
    prob_list = []

    # building the code and probability lists for the countries
    code_list.append(country_info['first_country']['country_id'])
    code_list.append(country_info['second_country']['country_id'])
    code_list.append(country_info['third_country']['country_id'])

    prob_list.append(country_info['first_country']['probability'])
    prob_list.append(country_info['second_country']['probability'])
    prob_list.append(country_info['third_country']['probability'])

    # building the object to be returned
    returned_json = {
        "name": r["name"],
        "country_ids": code_list, 
        "country_probs": prob_list,
    }

    # casting the object to json and returning it
    return JsonResponse(returned_json)
