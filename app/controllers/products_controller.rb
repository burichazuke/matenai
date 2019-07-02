class ProductsController < ApplicationController
  def index
    if params[:keyword]
      @items = RakutenWebService::Ichiba::Item.search(keyword: 'ドッグフード' + params[:keyword])
    else
      @items = RakutenWebService::Ichiba::Item.search(keyword: 'ドッグフード')
    end
  end

end
