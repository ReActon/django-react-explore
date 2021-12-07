from django.db import models

# Create your models here.
class NationaliseData(models.Model):
    name = models.CharField(max_length=60)
    firstCountry = models.CharField(max_length=120)
    secondCountry = models.CharField(max_length=120)
    thirdCountry = models.CharField(max_length=120)

    def __str__(self):
        return self.name