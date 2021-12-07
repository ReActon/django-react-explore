from django.shortcuts import render
import requests
from django.http import JsonResponse

# Create your views here.
def index(request, name):
    if name == '':
        return 
    url = 'https://api.nationalize.io/?name={}'
    nameis = name 

    r = requests.get(url.format(nameis)).json()

    # print(r)
    country_prob1 = {
        'name': r['name'],
        'country_list': r['country'],
    }
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
    # for i in country_info:
    #     returned_json = {
    #         "country_ids": code_list.append(country_list[i][i]),
    #         "country_probs": prob_list.append(country_list[i][i]),
    #     }
    code_list.append(country_info['first_country']['country_id'])
    code_list.append(country_info['second_country']['country_id'])
    code_list.append(country_info['third_country']['country_id'])

    prob_list.append(country_info['first_country']['probability'])
    prob_list.append(country_info['second_country']['probability'])
    prob_list.append(country_info['third_country']['probability'])

    
    returned_json = {
        "name": r["name"],
        "country_ids": code_list, 
        "country_probs": prob_list,
    }
    # perc = country_prob['first_country']['probability'] * 100
    # print('You are likely from {} with a probability of {}'.format(country_prob['first_country']['country_id'], perc))
    js = JsonResponse(returned_json)
    print(type(js))
    return js
