import React from "react";
import PageTitle from "../components/pagetitle";
import datapitchdeck from "../assets/fake-data/data-pitchdeck";



const PitchDeck = () => {
    
    return (
        <div>
            <PageTitle title="" />
            <section className="pitchDeck">
                <div className="pitch-container">
                    <div className="pitch-left">
                        <h3>Investment Pitch Deck </h3>
                        <p>From a compelling introduction to a solid financial plan, we can help you highlight the key elements that investors are looking for.</p>
                        
                    </div>
                    <div className="pitch-right">
                        <img className="pitch-hand" src="https://ecorpwpsrv-0f9814189c3cdd15bdb8-endpoint.azureedge.net/blobecorpwpsrv0c6c233083/wp-content/uploads/2023/03/faqs.png" />
                    </div>
                </div>
            </section>

            <section className="pitch-body">
                <div className="pitch-heading">
                    <h2>Crafting an investment pitch in just three simple steps!</h2>
                </div>

                <div className="card-container">
                    <div className="pitch-card">
                        <div className="left-part">
                            <img src="https://ecorpwpsrv-0f9814189c3cdd15bdb8-endpoint.azureedge.net/blobecorpwpsrv0c6c233083/wp-content/uploads/2023/03/rs1-1.png" alt="" className="card-image" />
                        </div>
                        <div className="right-part">
                            <h5 className="card-heading">Assess your company</h5>
                            <p>Our team will conduct a thorough examination of your business and the specific market segment it operates </p>
                        </div>
                    </div>
                    <div className="pitch-card">
                        <div className="left-part">
                            <img src="https://ecorpwpsrv-0f9814189c3cdd15bdb8-endpoint.azureedge.net/blobecorpwpsrv0c6c233083/wp-content/uploads/2023/03/rs2.png" alt="" className="card-image" />
                        </div>
                        <div className="right-part">
                            <h5 className="card-heading">Get the draft</h5>
                            <p>Your business pitch deck will be generated within 20 business days, utilizing the information and feedback you provide to our team.</p>
                        </div>
                    </div>
                    <div className="pitch-card">
                        <div className="left-part">
                            <img src="https://ecorpwpsrv-0f9814189c3cdd15bdb8-endpoint.azureedge.net/blobecorpwpsrv0c6c233083/wp-content/uploads/2023/03/rs3.png" alt="" className="card-image" />
                        </div>
                        <div className="right-part">
                            <h5 className="card-heading">Two no-cost rounds of revisions</h5>
                            <p>Our organization provides no-cost support to startups, which includes two rounds of revision at no charge.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}



export default PitchDeck;