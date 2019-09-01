import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter,  MDBTooltip } from "mdbreact";



import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';



const Movi = ({ element }) => {
    return (

            <section className="text-center my-5">
              <MDBRow>
                <MDBCol lg="10" md="12" className="mb-lg-0 mb-4">
                  <MDBCard wide ecommerce>
                    <MDBCardImage
                      cascade 
                      src={element.image}
                      top
                      alt="sample photo"
                      />
                    <MDBCardBody cascade className="text-center">
                      <a href="#!" className="text-muted">
                        <h5>Action</h5>
                      </a>
                      <MDBCardTitle>
                        <strong>
                          <a href="#!">{element.titre}</a>
                        </strong>
                      </MDBCardTitle>
                      <MDBCardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing minima
                        veniam elit.
                      </MDBCardText>
                      <MDBCardFooter className="px-1">
                        <span className="float-left font-weight-bold">
                          <strong>Download</strong>
                        </span>
                        <span className="float-right">
                        <StarRatingComponent 
                  name="rate2" 
                  editing={false}
                  starCount={5}
                  value={element.rating}
                  />
                        </span>
                      </MDBCardFooter>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </section>
            
               
          );
        }

export default Movi;