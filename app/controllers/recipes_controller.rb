class RecipesController < ApplicationController
  def index
    @recipes = Recipe.order("created_at desc")
  end

  def new
    @recipe = Recipe.new
  end

  def create
    @recipe = Recipe.create(recipes_params)
    if @recipe.save
      redirect_to new_recipe_howto_path(@recipe)
    else
      render action: :new
    end
  end

  


  private
  def recipes_params
    params.require(:recipe).permit(
      :name,
      :detail,
      :image,
      :material).merge(user_id: current_user.id)
  end
end
