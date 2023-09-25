class Api::V1::NotesController < ApplicationController
  before_action :set_note, only: %i[ show update destroy ]

  # GET /notes
  def index
    page = params[:page]
    limit = params[:limit]
    @notes = Note.paginate(:page => page, :per_page => limit)

    render json: { notes: @notes, total: @notes.total_entries, currentPage: @notes.current_page }
  end

  # GET /notes/1
  def show
    render json: @note
  end

  # POST /notes
  def create
    @note = Note.new(note_params)

    if @note.save
      render json: @note, status: :created, location: @note
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /notes/1
  def update
    if @note.update(note_params)
      render json: @note
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  # DELETE /notes/1
  def destroy
    @note.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_note
      @note = Note.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def note_params
      params.require(:note).permit(:title, :content, :category_id)
    end
end
