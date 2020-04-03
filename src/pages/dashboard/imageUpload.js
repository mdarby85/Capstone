/**
 * author: Chris Holle
 * file: imageUpload.js
 *
 * Description:
 * Page for uploading media.
 *
 * TODO: Finish design
 *
 * NOTE: If trying to delete, use axios
 * No supported GraphQL query for deleting files
 */

import React, { useState } from "react";
import PageTitle from "components/titles/pageTitle"
import DashboardLayout from "components/layouts/dashboardLayout"
import { API_URL } from "../../constants";
import { TEST_USER_ID } from "../../constants";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { IMAGE_QUERY, USER_IMAGE_UPLOAD_MUTATION } from "../../data/queries";
import styled from "styled-components";
import { Col, Row } from "reactstrap";
import Link from "components/link";
import axios from 'axios';


const DisplayImage = styled.img`
  border-radius: 7px 7px 0 0;
  max-width: 325px;
  max-height: 200px;
`;

export default () => {

  const [imgID, setImageID] = useState('');

  const { data, loading, error } = useQuery(IMAGE_QUERY, {variables: {id: TEST_USER_ID}});

  const [images, setImages] = useState(null);

  function setInitialState() {
    if (data) {
      if (data.user) {
        if (data.user.mediaLibrary) {
          data.user.mediaLibrary.map(result => {
            setImageID(imgID => [...imgID, result.id]);
          });
        } else {
          setImageID(imgID => [imgID])
        }
      }

    }
  }


  function onImageChange(event) {
    console.log(event.target.files);
    setImages(event.target.files);
  }

  function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    Array.from(images).forEach(image => {
      formData.append('files', image);
    });
    axios
      .post(`http://localhost:1337/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(res => {
        setInitialState();
        res.data.map(result => {
          setImageID(imgID => [...imgID, result.id]);
        });
        updateUserImgLibrary();
      })
      .catch(err => {
        console.log(err);
      });
  }

  // TODO: Remove when dynamically pulling user ID
  const id = TEST_USER_ID;

  const [updateUserImgLibrary, {errorPub}] = useMutation(USER_IMAGE_UPLOAD_MUTATION, {
    variables: { id, imgID },
    refetchQueries: ["IMAGE_QUERY"]
  });


  return (
    <DashboardLayout>
      <PageTitle title="File Library" />
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="files"
          onChange={onImageChange}
          alt="image"
          multiple={true}
        />
        <button type="submit">Upload</button>
      </form>
      <br/>
      <h2>{images ? "Images to upload:" : ""} </h2>

      <Row style={{padding: "2rem"}}>

        {Array.of(images).map(image => {
        // let preview = URL.createObjectURL(image);
        console.log("testing");
        console.log(image);
        let value = [];
        if (image) {
          for(let i = 0; i < image.length; i++) {
            console.log(image[i]);
            let val = image[i];
            value.push(val);
          }
        }
          return (value.map(img => (
            <Col md={3}>
              <p>{img.name}</p>
              <DisplayImage src={URL.createObjectURL(img)}/>
            </Col>
          )))

      })}
      </Row>

      <hr style={{marginTop: "2rem", marginBottom: "2rem"}}/>
      <div>
        <Row>
          {loading && <p>Loading...</p>}
          {error && <p>Error: ${error.message}</p>}
          {data && data.user.mediaLibrary && data.user.mediaLibrary.map(node => (
            <Col md={3}>
              <p>{node.name}</p>
              <Link to={`${API_URL}${node.url}`}>
                <DisplayImage src={`${API_URL}${node.url}`}/>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </DashboardLayout>
  )
}