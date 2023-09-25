class Api::V1::CategoriesController < ApplicationController
  before_action :set_category, only: %i[ show update destroy ]

  # GET /categories
  def index
    page = params[:page]
    limit = params[:limit]
    @categories = Category.paginate(:page => page, :per_page => limit)

    render json: { categories: @categories, total: @categories.total_entries, currentPage: @categories.current_page }
  end

  # GET /categories/1
  def show
    render json: { category: @category, notes_count: @notes_count }
  end

  # POST /categories
  def create
    @category = Category.new(category_params)

    if @category.save
      render json: @category, status: :created, location: @note
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /categories/1
  def update
    if @category.update(category_params)
      render json: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /categories/1
  def destroy
    @category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
      @notes_count = Note.where(category_id: params[:id]).count
    end

    # Only allow a list of trusted parameters through.
    def category_params
      params.require(:category).permit(:name)
    end
end
