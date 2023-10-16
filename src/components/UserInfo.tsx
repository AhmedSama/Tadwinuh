import girl from "../assets/girl.jpg"
import {useId, useState} from 'react'
import {FaEdit} from 'react-icons/fa'
const UserInfo = () => {
    const id = useId()
    const [selectedImage, setSelectedImage] = useState(girl);

  const handleImageUpload = (e:React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      // Check if the selected file is an image (you can expand the list of allowed file types)
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.onload = (e) => {
          if (e.target && typeof e.target.result === "string") {
            setSelectedImage(e.target.result);
          }
        };

        reader.readAsDataURL(file);
      } else {
        alert("Please select an image file.");
      }
    }
  };
  return (
    <div style={{background:"white"}} className="user p-container">
        <div style={{width:70,height:70,overflow:"hidden"}}>
            <img src={selectedImage} alt="tadwinh" className="user-img" />
        </div>
        <input type="file" accept="image/*" onChange={handleImageUpload}   id={id} style={{display:"none"}} />
        <label className="cp" htmlFor={id}>change image <span><FaEdit /></span></label>
    </div>
  )
}

export default UserInfo