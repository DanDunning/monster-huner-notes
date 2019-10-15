import React, { Component } from 'react';
import Search from '../Search/Search';

class Filter extends Component {
  render() {

    const monsters =
    [
        {
            name: "Acidic Glavenus",
            fireelement: "Fire",
            firestars: 3,
            dragonelement: "Dragon",
            dragonstars: 2,
            thunderelement: "Thunder",
            thunderstars: 2,
            waterelement: "Water",
            waterstars: 1,
            iceelement: "Ice",
            icestars: 1
        },
        "Ancient Leshen",
        "Anjanath",
        "Azure Rathalos",
        "Banbaro",
        "Barioth",
        "Barroth",
        "Bazelgeuse",
        "Behemoth",
        "Beotodus",
        "Black Diablos",
        "Blackveil Vaal Hazak",
        "Brachydios",
        "Brute Tigrex",
        "Coral Pukei-Pukei",
        "Deviljho",
        "Diablos",
        "Dodogama",
        "Ebony Odogaron",
        "Fulgur Anjanath",
        "Glavenus",
        "Gold Rathian",
        "Great Girros",
        "Great Jagras",
        "Jyuratodus",
        "Kirin",
        "Kulu-Ya-Ku",
        "Kulve Taroth",
        "Kushala Daora",
        "Lavasioth",
        "Legiana",
        "Leshen",
        "Lunastra",
        "Namielle",
        "Nargacuga",
        "Nergigante",
        "Nightshade Paolumu",
        "Odogaron",
        "Paolumu",
        "Pink Rathian",
        "Pukei-Pukei",
        "Radobaan",
        "Rajang",
        "Rathalos",
        "Rathian",
        "Ruiner Nergigante",
        "Savage Deviljho",
        "Scarred Yian Garuga",
        "Seething Bazelgeuse",
        "Shara Ishvalda",
        "Shrieking Legiana",
        "Silver Rathalos",
        "Teostra",
        "Tigrex",
        "Tobi-Kadachi",
        "Tzitzi-Ya-Ku",
        "Uragaan",
        "Vaal Hazak",
        "Velkhana",
        "Viper Tobi-Kadachi",
        "Xeno'jiiva",
        "Yian Garuga",
        "Zinogre",
        "Zorah Magdaros"       
    ];

    return (
        <Search content={monsters} />
    );
  }
}

export default Filter;