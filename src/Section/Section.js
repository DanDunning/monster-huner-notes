import React from 'react';
import Monsterdata from '../Data/Monsterdata';

function Section(props) {

    return (
        <section class="section">
            <div class="container is-fluid">
                {Monsterdata.map((postDetail) => {
                    return (
                        <div class="coloumns">
                            <div class="column">
                                <div class="card">
                                    <div class="card-content">
                                        <div class="content">
                                            <div class="columns">
                                                <div class="column">
                                                    <h1>{postDetail.name}</h1>
                                                    <h4 className="capitalize">{postDetail.species}</h4>
                                                    <p>{postDetail.description}</p>
                                                </div>
                                                <div class="column">
                                                    <p><b>Weaknesses:</b></p>
                                                    <ul>
                                                        {postDetail.weaknesses.map(weaknesses =>
                                                            <li className="capitalize">{weaknesses.element}: {weaknesses.stars} {weaknesses.condition}</li>
                                                        )}
                                                    </ul>
                                                </div>
                                                <div class="column">
                                                    <p><b>Ailments:</b></p>
                                                    <ul>
                                                        {postDetail.ailments.map(ailments =>
                                                            <li className="capitalize">{ailments.name}</li>
                                                        )}
                                                    </ul>
                                                </div>
                                                <div class="column">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Section;