class RenameMarterialColumnToRecipes < ActiveRecord::Migration[5.2]
  def change
    rename_column :recipes, :marterial, :material
  end
end
