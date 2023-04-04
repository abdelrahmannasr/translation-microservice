import dotenv = require('dotenv');

export class Constants {
  public static DOT_ENV = dotenv.config();

  // API Routes
  public static API_VERSION = 'v0.0.1';
  public static API_PREFIX = 'api';

  // Server Configurations
  public static PORT = process.env.PORT ? process.env.PORT : '3000';
  public static SESSION_SECRET_KEY = 'asdmkasldmsalkdmasldkmsaldk';

  // Database
  public static DB_BASE_URI = 'mongodb://localhost:27017/';
  public static GLOBAL_DB = 'tr_global';
  public static GLOBAL_CONNECTION = 'Global';

  // Swagger
  public static API_TITLE = 'Microservice Templates APIs';
  public static API_DESCRIPTION =
    'Microservice Templates API provide the easy way to integrate and handle API business logic and model with hight quality and performance';
  public static API_TAG = 'Docs';
  public static API_AUTH_TYPE = 'http';
  public static API_AUTH_SCHEMA = 'bearer';
  public static API_AUTH_BEARER_FORMAT = 'JWT';
  public static API_AUTH_PATH = 'header';
  public static API_AUTH_NAME = 'Authorization';

  // Translations Paths
  public static TRANSLATIONS_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/translation`];
  public static TRANSLATION_TAG = 'Translation Management';
}
