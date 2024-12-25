from django.urls import path
from . import views

urlpatterns = [
    path('sip/', views.sip_calculator, name='sip'),
    path('compound_interest/', views.compound_interest_calculator, name='compound_interest'),
    path('gst_calculator/', views.gst_calculator, name='gst_calculator'),
    path('fd_calculator/', views.fd_calculator, name='fd_calculator'),
    path('rd_calculator/', views.rd_calculator, name='rd_calculator'),
    path('mis_calculator/', views.mis_calculator, name='mis_calculator'),
    path('simple_interest/', views.simple_interest_calculator, name='simple_interest_calculator'),
    path('ssy_maturity/', views.ssy_maturity_calculator, name='ssy_maturity_calculator'),
]
