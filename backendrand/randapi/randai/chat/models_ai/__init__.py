from rest_framework import serializers
from chat.models import *
from django.db import models
from rest_framework import viewsets
from rest_framework.response import Response
from util import  Settings
from chat.serializers import CompanyAISerializer , ApiOwnerSerializer
settings = Settings()
class ModelAI(models.Model):
    code = models.CharField(max_length=255, primary_key=True)
    provider = models.ManyToManyField(Provider, blank=True)
    company_ai_id = models.ForeignKey(CompanyAI, on_delete=models.CASCADE)
    api_owner_id = models.ForeignKey(ApiOwner, on_delete=models.CASCADE)
    label = models.CharField(max_length=255)
    type_service = models.CharField(max_length=10, choices=settings.TYPE_CHOICES, default='text')
    languages = models.ManyToManyField(Language, blank=True)
    is_active = models.BooleanField()
    is_stream = models.BooleanField()
    is_web_search = models.BooleanField(default=False)
    is_allow_image = models.BooleanField(default=False)
    state = models.CharField(max_length=255, choices=settings.STATE_CHOICES)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class ModelAISerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelAI
        fields = '__all__'



class ListModelsSerializer(serializers.ModelSerializer):
    company_ai = CompanyAISerializer(source='company_ai_id', read_only=True)
    api_owner =  ApiOwnerSerializer(source='api_owner_id', read_only=True)
    class Meta:
        model = ModelAI
        fields = '__all__'


class ListModelAPIViewSet(viewsets.ModelViewSet):
    queryset = ModelAI.objects.all()
    serializer_class = ListModelsSerializer
    def get_queryset(self):
        is_active = self.request.query_params.get('is_active')
        if is_active:
            queryset = ModelAI.objects.filter(is_active=is_active)
        else:
            queryset = ModelAI.objects.all()

        return queryset

    def list(self, request, *args, **kwargs):
        try:
            queryset = self.filter_queryset(self.get_queryset())
            serializer = self.get_serializer(queryset, many=True)
            data = serializer.data
            return Response(data, status=200)
        except Exception as e:
            return Response(str(e), status=500)



