import React from 'react';


class Finalsearch extends React.Component {
    state = {
        filter: "",
        data: [
            {
                fname: "Acidic Glavenus",
                fire: "Fire: 3",
                water: "Water: 1",
                thunder: "Thunder: 2",
                ice: "Ice: 1",
                dragon: "Dragon: 2",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Ancient Leshen",
                fire: "Fire: 3",
                water: "Water: *",
                thunder: "Thunder: 2",
                ice: "Ice: 1",
                dragon: "Dragon: 2",
                poison: "Poison: 2",
                sleep: "Sleep: *",
                paralysis: "Paralysis: 1",
                blast: "Blast: 1",
                stun: "Stun: 1"
            },
            {
                fname: "Anjanath",
                fire: "Fire: *",
                water: "Water: 3",
                thunder: "Thunder: 2",
                ice: "Ice: 2",
                dragon: "Dragon: 1",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 1",
                stun: "Stun: 2"
            },
            {
                fname: "Azure Rathalos",
                fire: "Fire: *",
                water: "Water: 1",
                thunder: "Thunder: 1",
                ice: "Ice: 2",
                dragon: "Dragon: 3",
                poison: "Poison: 1",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 1",
                stun: "Stun: 2"
            },
            {
                fname: "Banbaro",
                fire: "Fire: 2",
                water: "Water: 1",
                thunder: "Thunder: 1",
                ice: "Ice: 1",
                dragon: "Dragon: 3",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 3",
                stun: "Stun: 3"
            },
            {
                fname: "Barioth",
                fire: "Fire: 3",
                water: "Water: 1",
                thunder: "Thunder: 2",
                ice: "Ice: 1",
                dragon: "Dragon: 1",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Barroth",
                fire: "Fire: 3 (* with mud)",
                water: "Water: 3",
                thunder: "Thunder: *",
                ice: "Ice: 2",
                dragon: "Dragon: 1",
                poison: "Poison: 3",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 3",
                blast: "Blast: 3",
                stun: "Stun: 1"
            },
            {
                fname: "Bazelgeuse",
                fire: "Fire: *",
                water: "Water: 1",
                thunder: "Thunder: 3",
                ice: "Ice: 2",
                dragon: "Dragon: 2",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 1",
                stun: "Stun: 1"
            },
            {
                fname: "Behemoth",
                fire: "Fire: 1",
                water: "Water: 1",
                thunder: "Thunder: *",
                ice: "Ice: 1",
                dragon: "Dragon: 3",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Beotodus",
                fire: "Fire: 3",
                water: "Water: 1",
                thunder: "Thunder: 2",
                ice: "Ice: *",
                dragon: "Dragon: *",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 3",
                stun: "Stun: 2"
            },
            {
                fname: "Black Diablos",
                fire: "Fire: *",
                water: "Water: 2",
                thunder: "Thunder: 1",
                ice: "Ice: 3",
                dragon: "Dragon: *",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 3",
                blast: "Blast: 2",
                stun: "Stun: 1"
            },
            {
                fname: "Blackveil Vaal Hazak",
                fire: "Fire: 2",
                water: "Water: *",
                thunder: "Thunder: 1",
                ice: "Ice: 1",
                dragon: "Dragon: 2",
                poison: "Poison: 1",
                sleep: "Sleep: 1",
                paralysis: "Paralysis: 1",
                blast: "Blast: 2",
                stun: "Stun: 1"
            },
            {
                fname: "Brachydios",
                fire: "Fire: *",
                water: "Water: 2",
                thunder: "Thunder: 1",
                ice: "Ice: 3",
                dragon: "Dragon: 1",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 1",
                stun: "Stun: 2"
            },
            {
                fname: "Brute Tigrex",
                fire: "Fire: *",
                water: "Water: 3",
                thunder: "Thunder: 2",
                ice: "Ice: 1",
                dragon: "Dragon: 1",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Coral Pukei-Pukei",
                fire: "Fire: 1",
                water: "Water: 1",
                thunder: "Thunder: 2",
                ice: "Ice: 3",
                dragon: "Dragon: 1",
                poison: "Poison: 3",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Deviljho",
                fire: "Fire: 2",
                water: "Water: 2",
                thunder: "Thunder: 3",
                ice: "Ice: 1",
                dragon: "Dragon: 3",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Diablos",
                fire: "Fire: *",
                water: "Water: 2",
                thunder: "Thunder: 1",
                ice: "Ice: 3",
                dragon: "Dragon: 2",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 3",
                blast: "Blast: 2",
                stun: "Stun: 1"
            },
            {
                fname: "Dodogama",
                fire: "Fire: *",
                water: "Water: 2",
                thunder: "Thunder: 3",
                ice: "Ice: 2",
                dragon: "Dragon: 1",
                poison: "Poison: 3",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 1",
                stun: "Stun: 2"
            },
            {
                fname: "Ebony Odogaron",
                fire: "Fire: 2",
                water: "Water: 3",
                thunder: "Thunder: 2",
                ice: "Ice: 2",
                dragon: "Dragon: 1",
                poison: "Poison: 3",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 3",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Fulgur Anjanath",
                fire: "Fire: 2",
                water: "Water: 3",
                thunder: "Thunder: 1",
                ice: "Ice: 3",
                dragon: "Dragon: 1",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 1",
                stun: "Stun: 2"
            },
            {
                fname: "Glavenus",
                fire: "Fire: *",
                water: "Water: 3",
                thunder: "Thunder: 1",
                ice: "Ice: 2",
                dragon: "Dragon: 2",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Gold Rathian",
                fire: "Fire: *",
                water: "Water: 2",
                thunder: "Thunder: 3",
                ice: "Ice: 1",
                dragon: "Dragon: *",
                poison: "Poison: 1",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 1",
                stun: "Stun: 2"
            },
            {
                fname: "Great Girros",
                fire: "Fire: 2",
                water: "Water: 3",
                thunder: "Thunder: 1",
                ice: "Ice: 2",
                dragon: "Dragon: 1",
                poison: "Poison: 2",
                sleep: "Sleep: 3",
                paralysis: "Paralysis: 1",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Great Jagras",
                fire: "Fire: 3",
                water: "Water: *",
                thunder: "Thunder: 2",
                ice: "Ice: 2",
                dragon: "Dragon: 1",
                poison: "Poison: 3",
                sleep: "Sleep: 3",
                paralysis: "Paralysis: 3",
                blast: "Blast: 3",
                stun: "Stun: 3"
            },
            {
                fname: "Jyuratodus",
                fire: "Fire: 1 (* when mud)",
                water: "Water: 3 (when mud), * (no mud)",
                thunder: "Thunder: 3 (no mud), * (when mud)",
                ice: "Ice: 1",
                dragon: "Dragon: 1",
                poison: "Poison: 2",
                sleep: "Sleep: 1",
                paralysis: "Paralysis: 2",
                blast: "Blast: 1",
                stun: "Stun: 3"
            },
            {
                fname: "Kirin",
                fire: "Fire: 3",
                water: "Water: 2",
                thunder: "Thunder: *",
                ice: "Ice: 2",
                dragon: "Dragon: 1",
                poison: "Poison: 1",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: *",
                blast: "Blast: 2",
                stun: "Stun: 1"
            },
            {
                fname: "Kulu-Ya-Ku",
                fire: "Fire: 2",
                water: "Water: 3",
                thunder: "Thunder: 2",
                ice: "Ice: 2",
                dragon: "Dragon: 2",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Kulve Taroth",
                fire: "Fire: *",
                water: "Water: 2",
                thunder: "Thunder: *, 3 (gold weakness)",
                ice: "Ice: 3",
                dragon: "Dragon: 2, 1 (gold weakness)",
                poison: "Poison: 1",
                sleep: "Sleep: 1",
                paralysis: "Paralysis: 1",
                blast: "Blast: 1",
                stun: "Stun: 1"
            },
            {
                fname: "Kushala Daora",
                fire: "Fire: 1",
                water: "Water: *",
                thunder: "Thunder: 3",
                ice: "Ice: *",
                dragon: "Dragon: 2",
                poison: "Poison: 3",
                sleep: "Sleep: 1",
                paralysis: "Paralysis: 1",
                blast: "Blast: 3",
                stun: "Stun: 2"
            },
            {
                fname: "Lavasioth",
                fire: "Fire: *",
                water: "Water: 1",
                thunder: "Thunder: * (when hardened)",
                ice: "Ice: 1, * (when hardened)",
                dragon: "Dragon: 1",
                poison: "Poison: 3",
                sleep: "Sleep: 1",
                paralysis: "Paralysis: 2",
                blast: "Blast: 1",
                stun: "Stun: 2"
            },
            {
                fname: "Legiana",
                fire: "Fire: 2",
                water: "Water: 1",
                thunder: "Thunder: 3",
                ice: "Ice: *",
                dragon: "Dragon: 1",
                poison: "Poison: 3",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Leshen",
                fire: "Fire: 3",
                water: "Water: *",
                thunder: "Thunder: 2",
                ice: "Ice: 1",
                dragon: "Dragon: 2",
                poison: "Poison: 3",
                sleep: "Sleep: *",
                paralysis: "Paralysis: 2",
                blast: "Blast: 2",
                stun: "Stun: 1"
            },
            {
                fname: "Lunastra",
                fire: "Fire: *",
                water: "Water: 1",
                thunder: "Thunder: 1",
                ice: "Ice: 3",
                dragon: "Dragon: 2",
                poison: "Poison: 1",
                sleep: "Sleep: 1",
                paralysis: "Paralysis: 1",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Namielle",
                fire: "Fire: 3",
                water: "Water: *",
                thunder: "Thunder: *",
                ice: "Ice: 1",
                dragon: "Dragon: 2",
                poison: "Poison: 3",
                sleep: "Sleep: 1",
                paralysis: "Paralysis: 1",
                blast: "Blast: 3",
                stun: "Stun: 2"
            },
            {
                fname: "Nargacuga",
                fire: "Fire: 2",
                water: "Water: *",
                thunder: "Thunder: 3",
                ice: "Ice: 1",
                dragon: "Dragon: 1",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Nergigante",
                fire: "Fire: 1",
                water: "Water: 1",
                thunder: "Thunder: 3",
                ice: "Ice: 1",
                dragon: "Dragon: 2",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Nightshade Paolumu",
                fire: "Fire: 2",
                water: "Water: 3",
                thunder: "Thunder: 1",
                ice: "Ice: 1",
                dragon: "Dragon: *",
                poison: "Poison: 2",
                sleep: "Sleep: 1",
                paralysis: "Paralysis: 2",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Odogaron",
                fire: "Fire: *",
                water: "Water: *",
                thunder: "Thunder: 2",
                ice: "Ice: 3",
                dragon: "Dragon: Immune",
                poison: "Poison: 1",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 3",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Paolumu",
                fire: "Fire: 3",
                water: "Water: *",
                thunder: "Thunder: 2",
                ice: "Ice: 1",
                dragon: "Dragon: 1",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 3",
                stun: "Stun: 3"
            },
            {
                fname: "Pink Rathian",
                fire: "Fire: *",
                water: "Water: 1",
                thunder: "Thunder: 2",
                ice: "Ice: 1",
                dragon: "Dragon: 3",
                poison: "Poison: 1",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 1",
                stun: "Stun: 3"
            },
            {
                fname: "Pukei-pukei",
                fire: "Fire: 2",
                water: "Water: *",
                thunder: "Thunder: 3",
                ice: "Ice: 2",
                dragon: "Dragon: 1",
                poison: "Poison: 1",
                sleep: "Sleep: 3",
                paralysis: "Paralysis: 3",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Radobaan",
                fire: "Fire: 1",
                water: "Water: 1",
                thunder: "Thunder: 1",
                ice: "Ice: 2",
                dragon: "Dragon: 3",
                poison: "Poison: 2",
                sleep: "Sleep: 1",
                paralysis: "Paralysis: 2",
                blast: "Blast: 3",
                stun: "Stun: 2"
            },
            {
                fname: "Rajang",
                fire: "Fire: ?",
                water: "Water: ?",
                thunder: "Thunder: ?",
                ice: "Ice: ?",
                dragon: "Dragon: ?",
                poison: "Poison: ?",
                sleep: "Sleep: ?",
                paralysis: "Paralysis: ?",
                blast: "Blast: ?",
                stun: "Stun: ?"
            },
            {
                fname: "Rathalos",
                fire: "Fire: *",
                water: "Water: 1",
                thunder: "Thunder: 2",
                ice: "Ice: 1",
                dragon: "Dragon: 3",
                poison: "Poison: 1",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 1",
                stun: "Stun: 2"
            },
            {
                fname: "Rathian",
                fire: "Fire: *",
                water: "Water: 1",
                thunder: "Thunder: 2",
                ice: "Ice: 1",
                dragon: "Dragon: 3",
                poison: "Poison: 1",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 1",
                stun: "Stun: 3"
            },
            {
                fname: "Ruiner Nergigante",
                fire: "Fire: 1",
                water: "Water: 1",
                thunder: "Thunder: 2",
                ice: "Ice: 1",
                dragon: "Dragon: 3",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 3",
                stun: "Stun: 1"
            },
            {
                fname: "Savage Deviljho",
                fire: "Fire: 2",
                water: "Water: 2",
                thunder: "Thunder: 3",
                ice: "Ice: 1",
                dragon: "Dragon: 3",
                poison: "Poison: 3",
                sleep: "Sleep: 3",
                paralysis: "Paralysis: 3",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Scarred Yian Garuga",
                fire: "Fire: *",
                water: "Water: 3",
                thunder: "Thunder: *",
                ice: "Ice: 1",
                dragon: "Dragon: 2",
                poison: "Poison: 1",
                sleep: "Sleep: 1",
                paralysis: "Paralysis: 2",
                blast: "Blast: 3",
                stun: "Stun: 2"
            },
            {
                fname: "Seething Bazelgeuse",
                fire: "Fire: *",
                water: "Water: 1",
                thunder: "Thunder: 2",
                ice: "Ice: 3",
                dragon: "Dragon: 1",
                poison: "Poison: 2",
                sleep: "Sleep: 3",
                paralysis: "Paralysis: 2",
                blast: "Blast: 1",
                stun: "Stun: 2"
            },
            {
                fname: "Shara Ishvalda",
                fire: "Fire: 1",
                water: "Water: 2",
                thunder: "Thunder: *",
                ice: "Ice: 3",
                dragon: "Dragon: 1",
                poison: "Poison: 2",
                sleep: "Sleep: Immune",
                paralysis: "Paralysis: 1",
                blast: "Blast: 3",
                stun: "Stun: 1"
            },
            {
                fname: "Shrieking Legiana",
                fire: "Fire: 3",
                water: "Water: 1",
                thunder: "Thunder: 2",
                ice: "Ice: *",
                dragon: "Dragon: 1",
                poison: "Poison: 3",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Silver Rathalos",
                fire: "Fire: *",
                water: "Water: 3",
                thunder: "Thunder: 2",
                ice: "Ice: 1",
                dragon: "Dragon: *",
                poison: "Poison: 1",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 1",
                stun: "Stun: 2"
            },
            {
                fname: "Teostra",
                fire: "Fire: *",
                water: "Water: 3",
                thunder: "Thunder: 1",
                ice: "Ice: 3",
                dragon: "Dragon: 1",
                poison: "Poison: 2",
                sleep: "Sleep: 1",
                paralysis: "Paralysis: 1",
                blast: "Blast: 1",
                stun: "Stun: 2"
            },
            {
                fname: "Tigrex",
                fire: "Fire: *",
                water: "Water: 1",
                thunder: "Thunder: 3",
                ice: "Ice: 1",
                dragon: "Dragon: 2",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Tobi-Kadachi",
                fire: "Fire: 2",
                water: "Water: 3",
                thunder: "Thunder: *",
                ice: "Ice: 2",
                dragon: "Dragon: 1",
                poison: "Poison: 3",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Tzitzi-Ya-Ku",
                fire: "Fire: 2",
                water: "Water: 2",
                thunder: "Thunder: 3",
                ice: "Ice: 3",
                dragon: "Dragon: 2",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 2",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Uragaan",
                fire: "Fire: *",
                water: "Water: 3",
                thunder: "Thunder: 1",
                ice: "Ice: 2",
                dragon: "Dragon: 2",
                poison: "Poison: 3",
                sleep: "Sleep: 1",
                paralysis: "Paralysis: 2",
                blast: "Blast: 2",
                stun: "Stun: 3"
            },
            {
                fname: "Vaal Hazak",
                fire: "Fire: 3",
                water: "Water: *",
                thunder: "Thunder: 1",
                ice: "Ice: 1",
                dragon: "Dragon: 3",
                poison: "Poison: 1",
                sleep: "Sleep: 1",
                paralysis: "Paralysis: 1",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Velkhana",
                fire: "Fire: 3",
                water: "Water: 1",
                thunder: "Thunder: 2",
                ice: "Ice: *",
                dragon: "Dragon: 2",
                poison: "Poison: 2",
                sleep: "Sleep: 1",
                paralysis: "Paralysis: 1",
                blast: "Blast: 3",
                stun: "Stun: 1"
            },
            {
                fname: "Viper Tobi-Kadachi",
                fire: "Fire: 1",
                water: "Water: *",
                thunder: "Thunder: 3",
                ice: "Ice: 2",
                dragon: "Dragon: 1",
                poison: "Poison: 1",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 1",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Xeno'jiiva",
                fire: "Fire: 1",
                water: "Water: 1",
                thunder: "Thunder: 1",
                ice: "Ice: 1",
                dragon: "Dragon: 1",
                poison: "Poison: 3",
                sleep: "Sleep: Immune",
                paralysis: "Paralysis: 1",
                blast: "Blast: 2",
                stun: "Stun: 1"
            },
            {
                fname: "Yian Garuga",
                fire: "Fire: *",
                water: "Water: 3",
                thunder: "Thunder: *",
                ice: "Ice: 1",
                dragon: "Dragon: 2",
                poison: "Poison: 1",
                sleep: "Sleep: 1",
                paralysis: "Paralysis: 2",
                blast: "Blast: 3",
                stun: "Stun: 2"
            },
            {
                fname: "Zinogre",
                fire: "Fire: 1",
                water: "Water: 2",
                thunder: "Thunder: *",
                ice: "Ice: 3",
                dragon: "Dragon: 1",
                poison: "Poison: 2",
                sleep: "Sleep: 2",
                paralysis: "Paralysis: 1",
                blast: "Blast: 2",
                stun: "Stun: 2"
            },
            {
                fname: "Zorah Magdaros",
                fire: "Fire: *",
                water: "Water: 3",
                thunder: "Thunder: 1",
                ice: "Ice: 1",
                dragon: "Dragon: 3",
                poison: "Poison: X",
                sleep: "Sleep: X",
                paralysis: "Paralysis: X",
                blast: "Blast: X",
                stun: "Stun: X"
            }
        ]
    };

    handleChange = event => {
        this.setState({ filter: event.target.value });
    };

    render() {
        const { filter, data } = this.state;
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = data.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toLowerCase().includes(lowercasedFilter)
            );
        });

        return (
            <section className="section">
                <div className="container is-fluid">
                    <div className="columns">
                        <div className="column">
                            <input className="input is-primary" placeholder="Monster search..." value={filter} onChange={this.handleChange} />
                        </div>
                    </div>
                    {filteredData.map(item => (
                        <div key={item.fname}>
                            <div className="columns">
                                <div className="column">
                                    <div className="card">
                                        <div className="card-content">
                                            <div className="content">
                                                <h1 className="title">
                                                    {item.fname}
                                                </h1>
                                                <p className="subtitle is-4">Weaknesses</p>
                                                <ul>
                                                    <li>{item.fire}</li>
                                                    <li>{item.water}</li>
                                                    <li>{item.thunder}</li>
                                                    <li>{item.ice}</li>
                                                    <li>{item.dragon}</li>
                                                    <li>{item.poison}</li>
                                                    <li>{item.sleep}</li>
                                                    <li>{item.paralysis}</li>
                                                    <li>{item.blast}</li>
                                                    <li>{item.stun}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="columns">
                        <div className="column has-text-centered">
                            <br />
                            <a href="#backtotop" className="button is-primary is-large fixed-bot">Back to top ^</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Finalsearch;