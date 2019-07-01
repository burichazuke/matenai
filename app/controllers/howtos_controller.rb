class HowtosController < ApplicationController

  def new
    @recipe = Recipe.find(params[:recipe_id])
    @howto = Howto.new
    @howtos = @recipe.howtos
  end

  def create
    @howto = Howto.create(howtos_params)
    respond_to do |format|
      format.json
      format.html
    end
  end

  def edit
    @howto = Howto.find(params[:id])
  end

  def update
    @howto = Howto.find(params[:id])
    @howto.update(howtos_params) 
    respond_to do |format|
      format.json
      format.html
    end
  end


  private
  def howtos_params
    params.require(:howto).permit(:content).merge(recipe_id: params[:recipe_id])
  end
end
