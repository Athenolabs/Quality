# -*- coding: utf-8 -*-
from setuptools import setup, find_packages
import os

version = '0.0.1'

setup(
    name='quality',
    version=version,
    description='App for managing customer complaints and quality management documentation.',
    author='ESO Electronic',
    author_email='service@eso-electronic.com',
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=("frappe",),
)
