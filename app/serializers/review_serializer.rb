class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :meal_id, :rating, :blurb
  belongs_to :user
end
