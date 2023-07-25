import React, { useState } from 'react';
import './DocumentUploadForm.css'

const DocumentUploadForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedFile) {
            setMessage('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            // Replace 'YOUR_UPLOAD_URL' with the actual server URL to handle the file upload.
            const response = await fetch('YOUR_UPLOAD_URL', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setMessage('File uploaded successfully!');
            } else {
                setMessage('File upload failed. Please try again later.');
            }
        } catch (error) {
            setMessage('An error occurred while uploading the file.');
        }
    };

    return (
        <div className='documentUpload'>
            <h2>Upload Document</h2>
            <form className='form_content' onSubmit={handleSubmit}>
                    
                    <input type="file" onChange={handleFileChange} />
                    <button type="submit">Submit</button>
                
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default DocumentUploadForm;
