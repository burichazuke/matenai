class Howto < ApplicationRecord
  belongs_to :recipe
  validates :content, presence: true
end
