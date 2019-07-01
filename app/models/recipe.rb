class Recipe < ApplicationRecord
  mount_uploader :image, ImageUploader
  belongs_to :user
  has_many :howtos
  validates :name, presence: true
end
