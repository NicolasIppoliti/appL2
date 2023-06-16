/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Typography, Container, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Calculator = () => {
    const [selectedLevels, setSelectedLevels] = useState({});
    const [totalCost, setTotalCost] = useState(0);

    const handleLevelSelect = (event, item) => {
        setSelectedLevels((prevSelectedLevels) => ({ ...prevSelectedLevels, [item.name]: event.target.value }));
    };

    const calculateTotalCost = () => {
        let totalCost = 0;
        const items = [
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/etc_bm_jewel_amber_i00.png', name: 'Amber Jewel', value: 20, levels: [1, 0.65, 0.40, 0.35, 0.3, 0.25, 0.2, 0.15] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/etc_bm_jewel_opal_i00.png', name: 'Opal Jewel', value: 40, levels: [1, 0.65, 0.40, 0.35, 0.3, 0.25, 0.2, 0.15] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/etc_bm_jewel_coral_i00.png', name: 'Coral Jewel', value: 40, levels: [1, 0.65, 0.40, 0.35, 0.3, 0.25, 0.2, 0.15] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/etc_bm_jewel_onyx_i00.png', name: 'Onyx Jewel', value: 60, levels: [1, 0.65, 0.40, 0.35, 0.3, 0.25, 0.2, 0.15] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/etc_bm_jewel_garnet_i00.png', name: 'Spinel Jewel', value: 60, levels: [1, 0.65, 0.40, 0.35, 0.3, 0.25, 0.2, 0.15] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/etc_bm_jewel_bloodstone_i00.png', name: 'Zircon Jewel', value: 60, levels: [1, 0.65, 0.40, 0.35, 0.3, 0.25, 0.2, 0.15] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/etc_bm_jewel_moonstone_i00.png', name: 'Moonstone Jewel', value: 20, levels: [1, 0.65, 0.40, 0.35, 0.3, 0.25, 0.2, 0.15] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/etc_bm_jewel_beryl_i00.png', name: 'Beryl Jewel', value: 100, levels: [1, 0.65, 0.40, 0.35, 0.3, 0.25, 0.2, 0.15] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/agathion_fire_1.png', name: 'Agathion Ignis', value: 200, levels: [1, 1, 1, 0.65, 0.5, 0.35, 0.24, 0.18, 0.14, 0.8] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/agathion_earth_1.png', name: 'Agathion Petram', value: 200, levels: [1, 1, 1, 0.65, 0.5, 0.35, 0.24, 0.18, 0.14, 0.8] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/agathion_water_1.png', name: 'Agathion Nebula', value: 200, levels: [1, 1, 1, 0.65, 0.5, 0.35, 0.24, 0.18, 0.14, 0.8] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/agathion_wind_1.png', name: 'Agathion Procella', value: 200, levels: [1, 1, 1, 0.65, 0.5, 0.35, 0.24, 0.18, 0.14, 0.8] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/pleasure_agathion_i00.png', name: 'Agathion Joy', value: 300, levels: [1, 1, 1, 0.65, 0.5, 0.35, 0.24, 0.18, 0.14, 0.8] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/bm_2018_sayha_cloak_back_i01.png', name: 'Cloak of Protection', value: 400, levels: [0.85, 0.8, 0.75, 0.6, 0.5, 0.4, 0.3, 0.2, 0.15, 0.07] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/bm_aden_talisman.png', name: 'Talisman of Aden', value: 100, levels: [1, 0.8, 0.7, 0.6, 0.4, 0.3, 0.24, 0.16, 0.1, 0.1] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/tallisman_rapid.png', name: 'Talisman of Speed', value: 300, levels: [0.6, 0.5, 0.45, 0.4, 0.35, 0.3, 0.25, 0.2, 0.1, 0.05] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/bm_eva_talisman.png', name: 'Talisman of Eva', value: 300, levels: [0.6, 0.5, 0.4, 0.35, 0.3, 0.28, 0.24, 0.26, 0.22, 0.2] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/sayhas_talisman_new.png', name: 'Talisman of Authority', value: 400, levels: [0.6, 0.5, 0.4, 0.35, 0.3, 0.28, 0.24, 0.26, 0.22, 0.2] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/r2_belt_i01.png', name: 'Dragon Belt', value: 350, levels: [0.6, 0.5, 0.4, 0.35, 0.3, 0.28, 0.24, 0.26, 0.22, 0.2] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/bm_pendant_pve_white.png', name: 'Einhasad Pendant', value: 650, levels: [1, 0.2, 0.18, 0.12, 0.9] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/accessory_barka_karm_i00.png', name: 'Circlet of Hero', value: 400, levels: [0.6, 0.5, 0.4, 0.35, 0.3, 0.28, 0.24, 0.26, 0.22, 0.2] },
        ];

        items.forEach((item) => {
            const level = selectedLevels[item.name] || 0;
            if (level > 0 && level <= item.levels.length) {
                const cumulativeProbability = item.levels.slice(0, level).reduce((acc, probability) => acc * probability, 1);
                const costPerLevel = item.value / cumulativeProbability;
                const itemTotalCost = level === 0 ? 0 : costPerLevel * level;
                totalCost += itemTotalCost;
            }
        });

        return totalCost.toFixed(0);
    };

    useEffect(() => {
        const newTotalCost = calculateTotalCost();
        setTotalCost(newTotalCost);
    }, [selectedLevels]);

    const renderItems = () => {
        const items = [
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/etc_bm_jewel_amber_i00.png', name: 'Amber Jewel', value: 20, levels: [1, 0.65, 0.40, 0.35, 0.3, 0.25, 0.2, 0.15] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/etc_bm_jewel_opal_i00.png', name: 'Opal Jewel', value: 40, levels: [1, 0.65, 0.40, 0.35, 0.3, 0.25, 0.2, 0.15] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/etc_bm_jewel_coral_i00.png', name: 'Coral Jewel', value: 40, levels: [1, 0.65, 0.40, 0.35, 0.3, 0.25, 0.2, 0.15] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/etc_bm_jewel_onyx_i00.png', name: 'Onyx Jewel', value: 60, levels: [1, 0.65, 0.40, 0.35, 0.3, 0.25, 0.2, 0.15] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/etc_bm_jewel_garnet_i00.png', name: 'Spinel Jewel', value: 60, levels: [1, 0.65, 0.40, 0.35, 0.3, 0.25, 0.2, 0.15] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/etc_bm_jewel_bloodstone_i00.png', name: 'Zircon Jewel', value: 60, levels: [1, 0.65, 0.40, 0.35, 0.3, 0.25, 0.2, 0.15] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/etc_bm_jewel_moonstone_i00.png', name: 'Moonstone Jewel', value: 20, levels: [1, 0.65, 0.40, 0.35, 0.3, 0.25, 0.2, 0.15] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/etc_bm_jewel_beryl_i00.png', name: 'Beryl Jewel', value: 100, levels: [1, 0.65, 0.40, 0.35, 0.3, 0.25, 0.2, 0.15] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/agathion_fire_1.png', name: 'Agathion Ignis', value: 200, levels: [1, 1, 1, 0.65, 0.5, 0.35, 0.24, 0.18, 0.14, 0.8] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/agathion_earth_1.png', name: 'Agathion Petram', value: 200, levels: [1, 1, 1, 0.65, 0.5, 0.35, 0.24, 0.18, 0.14, 0.8] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/agathion_water_1.png', name: 'Agathion Nebula', value: 200, levels: [1, 1, 1, 0.65, 0.5, 0.35, 0.24, 0.18, 0.14, 0.8] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/agathion_wind_1.png', name: 'Agathion Procella', value: 200, levels: [1, 1, 1, 0.65, 0.5, 0.35, 0.24, 0.18, 0.14, 0.8] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/pleasure_agathion_i00.png', name: 'Agathion Joy', value: 300, levels: [1, 1, 1, 0.65, 0.5, 0.35, 0.24, 0.18, 0.14, 0.8] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/bm_2018_sayha_cloak_back_i01.png', name: 'Cloak of Protection', value: 400, levels: [0.85, 0.8, 0.75, 0.6, 0.5, 0.4, 0.3, 0.2, 0.15, 0.07] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/bm_aden_talisman.png', name: 'Talisman of Aden', value: 100, levels: [1, 0.8, 0.7, 0.6, 0.4, 0.3, 0.24, 0.16, 0.1, 0.1] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/tallisman_rapid.png', name: 'Talisman of Speed', value: 300, levels: [0.6, 0.5, 0.45, 0.4, 0.35, 0.3, 0.25, 0.2, 0.1, 0.05] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/bm_eva_talisman.png', name: 'Talisman of Eva', value: 300, levels: [0.6, 0.5, 0.4, 0.35, 0.3, 0.28, 0.24, 0.26, 0.22, 0.2] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/sayhas_talisman_new.png', name: 'Talisman of Authority', value: 400, levels: [0.6, 0.5, 0.4, 0.35, 0.3, 0.28, 0.24, 0.26, 0.22, 0.2] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/r2_belt_i01.png', name: 'Dragon Belt', value: 350, levels: [0.6, 0.5, 0.4, 0.35, 0.3, 0.28, 0.24, 0.26, 0.22, 0.2] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/bm_pendant_pve_white.png', name: 'Einhasad Pendant', value: 650, levels: [1, 0.2, 0.18, 0.12, 0.9] },
            { image: 'https://l2.wiki/essence/l2improved/img/Icon/Texture/accessory_barka_karm_i00.png', name: 'Circlet of Hero', value: 400, levels: [0.6, 0.5, 0.4, 0.35, 0.3, 0.28, 0.24, 0.26, 0.22, 0.2] },
        ];

        return items.map((item, index) => {
            const level = selectedLevels[item.name] || 0;

            if (level >= 0 && level <= item.levels.length) {
                const cumulativeProbability = item.levels.slice(0, level).reduce((acc, probability) => acc * probability, 1);
                const costPerLevel = item.value / cumulativeProbability;
                const totalCost = costPerLevel * level;
                const itemCount = Math.ceil(totalCost / item.value);

                return (
                    <TableRow key={index}>
                        <TableCell>
                            <img src={item.image}></img>
                        </TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>
                            <Select
                                value={level}
                                onChange={(event) => handleLevelSelect(event, item)}
                                className="h-8"
                            >
                                {[...Array(item.levels.length + 1)].map((_, levelIndex) => (
                                    <MenuItem key={levelIndex} value={levelIndex}>
                                        {levelIndex}
                                    </MenuItem>
                                ))}
                            </Select>
                        </TableCell>
                        <TableCell>{item.value} L-Coins</TableCell>
                        <TableCell>{itemCount}</TableCell>
                        <TableCell>{totalCost.toFixed(0)} L-Coins</TableCell>
                    </TableRow>
                );
            }
            return null;
        });
    };

    return (
        <Container maxWidth="md" className="mt-8">
            <Typography variant="h4" component="h2" className="mb-4">
                L-Coin Calculator
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Item</TableCell>
                            <TableCell>Enchant</TableCell>
                            <TableCell>Cost</TableCell>
                            <TableCell>Item Count</TableCell>
                            <TableCell>Total Cost</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{renderItems()}</TableBody>
                </Table>
            </TableContainer>
            <div className="mt-6">
                <Typography variant="h5" component="h3" className="mb-2">
                    Total L-Coins
                </Typography>
                <Typography>{calculateTotalCost()} L-Coins</Typography>
            </div>
        </Container>
    );
};

export default Calculator;
