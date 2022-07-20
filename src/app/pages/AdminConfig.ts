export class AdminConfig {
  // An Example | Delete The Content When Started
  // source api
  // public static sourceAPI                   = 'http://turkey-app.yes-cloud.de/html/public/index.php/';0
  public static sourceAPI                   = 'https://test-api.storexweb.com/';
  // public static sourceAPI                   = 'http://localhost:8000/';

  // Login
  public static loginAPI                    = AdminConfig.sourceAPI + 'api/login';
  public static signupAPI                   = AdminConfig.sourceAPI + 'api/register';


  // List Movies
  public static moviesCategoriesAPI         = AdminConfig.sourceAPI + 'api/category';
  public static moviesAPI                   = AdminConfig.sourceAPI + 'api/movies';
  public static categoryMoviesAPI           = AdminConfig.sourceAPI + 'api/moviesByCategory';

  // Upload Image
  public static generalUploadAPI           = AdminConfig.sourceAPI + 'api/uploadImageTestApi';

}
