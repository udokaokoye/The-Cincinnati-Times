import React, {useEffect, useState} from "react";
import "./AddPost.css";
// import EditorJs from '@editorjs/editorjs';
// import Header from "@editorjs/header";
// import List from "@editorjs/list";
// import Embed from "@editorjs/embed";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor';
const AddPost = () => {
  const [post_title, setpost_title] = useState('')
  const [post_category, setpost_category] = useState('')
  const [post_summary, setpost_summary] = useState('')
  const [maincontent, setmaincontent] = useState('')
  const [caption_media_1, setcaption_media_1] = useState("");
  const [caption_media_2, setcaption_media_2] = useState("");
  const [caption_media_3, setcaption_media_3] = useState("");
  const [caption_media_4, setcaption_media_4] = useState("");
  const [caption_media_5, setcaption_media_5] = useState("");
  const [addVideo, setaddVideo] = useState(false);
  const [caption_media_video, setcaption_media_video] = useState("");
  const [disable_comments, setdisable_comments] = useState(false);
  const [schedule_post, setschedule_post] = useState(false);
  const [restrict_comments, setrestrict_comments] = useState(true);
  const [allow_votes, setallow_votes] = useState(true);
  const [trending, settrending] = useState(false);
  const [top_story, settop_story] = useState(false);


  const editorConfiguration = {
    toolbar: {
      shouldNotGroupWhenFull: true
    }
};

  useEffect(() => {
  }, [])

  const verfiyPublishFields = () => {
      if (post_title == '' || post_category == '' || post_summary == '' || maincontent == '') {
        return false
      } else {
        return true;
      }
  }

  const publishPostHandler = (publishStatus) => {
    const formData = new FormData;
    if (!verfiyPublishFields()) {
      alert("Make Sure All Fields With '*' are filled")
      return;
    }
        var media_1 = document.getElementById("media_1").files;
        var media_2 = document.getElementById("media_2").files;
        var media_3 = document.getElementById("media_3").files;
        var media_4 = document.getElementById("media_4").files;
        var media_5 = document.getElementById("media_5").files;

        if (media_1[0] != null) {
            formData.append("media_1", media_1[0]);
          } else {
            alert('At Least 2 Images must be added including cover image - (note they must be in order of file inputs)');
            return;
          }

          if (media_2[0] != null) {
            formData.append("media_2", media_2[0]);
          }  else {
            alert('At Least 2 Images must be added including cover image - (note they must be in order of file inputs)');
            return;
          }
        
          if (media_3[0] != null) {
            formData.append("media_3", media_3[0]);
          }

          if (media_4[0] != null) {
            formData.append("media_4", media_4[0]);
          }

          if (media_5[0] != null) {
            formData.append("media_5", media_5[0]);
          }

          // !SET TO ACTUAL EDITOR ID
        formData.append('editor_id', 'demo');
        formData.append('category', post_category);
        formData.append('title', post_title);
        formData.append('summary', post_summary);
        formData.append('slug', Math.random());
        formData.append('content', maincontent);
        formData.append('video', addVideo);
        formData.append('allow_comments', !disable_comments);
        formData.append('restrict_comments', restrict_comments);
        formData.append('allow_votes', allow_votes);
        formData.append('trending', trending);
        formData.append('top_story', top_story);
        formData.append('published', publishStatus);

        fetch('http://localhost/cincinnatitimes/add_post.php', {
          method: "POST",
          body: formData
        }).then((res) => res.json()).then((data) => {
          console.log(data);
        })
  }
  
  return <div className="add_post_container">
      <div className="add_post_wrapper">
              <h1 className="add_post_intro">Add New Post</h1>

              <div className="form">
                <h3>Post Title *</h3>
                <input onChange={(e) => setpost_title(e.target.value)} type="text" placeholder="Enter Post Title" />
                <h3>Post Category *</h3>
                <select defaultValue={post_category} onChange={(e) => setpost_category(e.target.value)}>
                  <option value="Sports">Sports</option>
                  <option value="Entertainments">Entertainments</option>
                  <option value="Crime">Crime</option>
                  <option value="Politcs">Politcs</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Bussiness">Bussiness</option>
                </select>

                <h3>Post Summary *</h3>
                <textarea onChange={(e) => setpost_summary(e.target.value)} placeholder="Enter Post Summary"></textarea>
                <div className="content_input">
                  
                <h3>Post Content *</h3>
                <CKEditor
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );

                        // Insert the toolbar before the editable area.
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );

                        this.editor = editor;
                    } }

                    onChange={ ( event, editor ) => {
                      const data = editor.getData();
                      setmaincontent(data)
                  } }
                    onError={ ( error, { willEditorRestart } ) => {
                        // If the editor is restarted, the toolbar element will be created once again.
                        // The `onReady` callback will be called again and the new toolbar will be added.
                        // This is why you need to remove the older toolbar.
                        if ( willEditorRestart ) {
                            this.editor.ui.view.toolbar.element.remove();
                        }
                    } }
                    // onChange={ ( event, editor ) => console.log( { event, editor } ) }
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5's decoupled editor!</p>"
                    config={editorConfiguration}
                />
                
                </div>

                <div className="field_group">
                  <div className="file_inpt">
                    <input id='media_1' type="file" /> <span>Post Cover Image *</span>
                    <input type="text" placeholder="Enter Image Caption" />
                  </div>
                  <div className="file_inpt">
                    <input id='media_2' type="file" /><span>Media 2 *</span>
                    <input type="text" placeholder="Enter Image Caption" />
                  </div>
                  <div className="file_inpt">
                    <input id='media_3' type="file" />
                    <input type="text" placeholder="Enter Image Caption" />
                  </div>
                  <div className="file_inpt">
                    <input id='media_4' type="file" />
                    <input type="text" placeholder="Enter Image Caption" />
                  </div>
                  <div className="file_inpt">
                    <input id='media_5' type="file" />
                    <input type="text" placeholder="Enter Image Caption" />
                  </div>
                </div>

                <h3>Video Option</h3>
                <input checked={addVideo} onChange={(e) => setaddVideo(!addVideo)} type="checkbox" name="" id="" /> <span>Add video to post</span>
                <input type="file" style={{display: addVideo ? 'block' : 'none'}} />
                  <br /><br />
                <div className="other_option">
                  <h3>Other Post Options</h3>
                  <input type="checkbox" checked={disable_comments} onChange={(e) => setdisable_comments(!disable_comments)} /> <span>Disable Comments</span>
                  <br />
                  <input type="checkbox" checked={schedule_post} onChange={() => setschedule_post(!schedule_post)} /> <span>Schedule Post</span>
                  <br />
                  <input type="checkbox" checked={restrict_comments} onChange={(e) => setrestrict_comments(!restrict_comments)} /> <span>Restrict Comments To Signed In Users</span>
                  <br />
                  <input type="checkbox" checked={allow_votes} onChange={(e) => setallow_votes(!allow_votes)} /> <span>Allow Readers Votes</span>

                  <br />
                  <input type="checkbox" checked={trending} onChange={(e) => settrending(!trending)} /> <span>🔥🔥 <b>Trending</b></span>

                  <br />
                  <input type="checkbox" checked={top_story} onChange={(e) => settop_story(!top_story)} /> <span>📈 📈 <b>Top Stories</b></span>

                  
                </div>


                <div className="add_posts_btn">
                  <button onClick={() => publishPostHandler(true)} className="publish_btn">🚀 Publish</button>
                  <button onClick={() => publishPostHandler(false)} className="save_btn">💾 Save</button>
                  <button onClick={() => publishPostHandler(false)} className="preview_btn">🔎 Preview</button>
                </div>
              </div>
      </div>
  </div>;
};

export default AddPost;
