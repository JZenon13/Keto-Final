class ItemsController < ApplicationController

    def index
        items = Item.all 
        render json: items
    end

    def show
        items = Item.find(params[:id])
        render json: items
    end

    def create
        item = Item.create(params.permit(:id, :carbs, :name, :vegan, :category, :description, :img_url))
        render json: item, status: :created
    end 

    private 

    def item_params
        params.permit(:id, :carbs, :name, :vegan, :category, :description, :img_url)
    end
end
