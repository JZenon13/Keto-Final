class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url
  has_many :reviews
  has_many :users
end
