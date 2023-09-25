Rails.application.routes.draw do
  resources :notes
  namespace :api do
    namespace :v1 do
      resources :categories
      resources :notes
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
