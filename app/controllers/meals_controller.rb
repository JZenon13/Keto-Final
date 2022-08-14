class MealsController < ApplicationController

    def index
        meal = Meal.all
        render json: meal
    end

    def show
        meal = Meal.find(params[:id])
        render json: meal
    end

    def create 
        meal = Meal.create(meals_params)
        render json: meal, status: :created
    end

    def destroy
        meal = Meal.find_by(id: params[:id])
        meal.destroy
        head :no_content
    end

    private 

    def meals_params 
        params.permit(:id, :name, :img_url)
    end
end
