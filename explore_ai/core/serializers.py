from rest_framework import serializers
from .models import NationaliseData

class NationaliseDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = NationaliseData
        fields = ('name', 'firstCountry', 'secondCountry', 'thirdCountry')