class ReviewsController < ApplicationController

    def index
        review = Review.all 
        render json: review
    end

    def show
        review = Review.find(params[:id])
        render json: review
    end

    def create
        review = Review.create(review_params)
        render json: review, status: :created
      
    end

    private

    def review_params
        params.permit(:user_id, :meal_id, :rating, :blurb)
    end
end
