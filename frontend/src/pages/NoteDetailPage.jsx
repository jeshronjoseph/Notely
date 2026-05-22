import {useState,useEffect} from 'react';
import toast from 'react-hot-toast';
import api from "../lib/axios";
import { useNavigate, useParams,Link } from 'react-router-dom';
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from 'lucide-react';

const NoteDetailPage = () => {
  const [note,setNote] = useState(null);
  const [loading,setLoading] = useState(true);
  const [saving,setSaving] = useState(false);

  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching note",error);
        if (error.response?.status === 404) {
          toast.error("Note not found");
        } else {
          toast.error("Failed to fetch note");
        }
      } finally {
        setLoading(false);
      }

    }

    fetchNote();

  },[id]);

  const handleDelete = async (e,id) => {
        e.preventDefault();

        if (!window.confirm("Are you sure you want to delete?")) return;

        try {
            await api.delete(`/notes/${id}`);
            toast.success("Note deleted succesfully");
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("Error deleting Note.Try again");
        }
  };

  const handleSave = async () => {

    if (!note.title.trim() || !note.content.trim()){
      toast.error("All fields are required");
      return;
    }
    
    setSaving(true);

    try {
      await api.put(`/notes/${id}`,note);
      toast.success("Note updated succesfully");
      navigate("/");
    } catch (error) {
      console.log("Error saving note ",error);
      toast.error("Failed to update note");
    }finally{
      setSaving(false);
    }
  }

  if (loading){
    return(
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className='animate-spin size-10'/>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-2xl container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="btn btn-ghost">
            <ArrowLeftIcon className="size-5"/>
            Back to Notes
          </Link>
          <button onClick={(e) => handleDelete(e,note._id)} className="btn btn-error btn-outline">
            <Trash2Icon className="size-5"/>
            Delete Note
          </button>
        </div>

        <div className="card bg-base-100 rounded-3xl">
          <div className="card-body">

             <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Note title"
                className="input input-bordered rounded-2xl"
                value={note.title}
                onChange={(e) => setNote({...note,title: e.target.value})}
                />
             </div>

             <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Content</span>
              </label>
              <textarea
                placeholder="Write your note here..."
                className="textarea textarea-bordered h-32 rounded-2xl"
                value={note.content}
                onChange={(e) => setNote({...note,content: e.target.value})}
                />
             </div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary" disabled={saving} onClick={handleSave}>
                {saving ? "Saving" : "Save changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage