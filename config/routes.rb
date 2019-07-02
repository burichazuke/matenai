Rails.application.routes.draw do
  devise_for :users
  root 'recipes#index'
  
  resources :recipes do
    resources :howtos
  end
  get "products" => "products#index"
  resources :products
  get "products/search" => "products#search"
end
