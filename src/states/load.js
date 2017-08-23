// src/states/load.js

import Phaser from 'phaser';

export class Load extends Phaser.State{
	preload(){
		let SupportData = {
			htCurrentMonsterSettings: {
				x_offset: 100,
				y_offset: 0
			},
			arrItemImageData: [
				['gold_coin',		'I_GoldCoin.png'],
				['dagger',			'W_Dagger002.png']
			],
			arrBackgroundImageData: [
				['forest-back',		'parallax-forest-back-trees.png'],
				['forest-lights',	'parallax-forest-lights.png'],
				['forest-middle',	'parallax-forest-middle-trees.png'],
				['forest-front',	'parallax-forest-front-trees.png']
			],
			arrMonsterImageData: [
				['aerocephal',		'aerocephal.png'],
				['arcana_drake',	'arcana_drake.png'],
				['aurum_drakueli',	'aurum-drakueli.png'],
				['bat',				'bat.png'],
				['daemarbora',		'daemarbora.png'],
				['deceleon',		'deceleon.png'],
				['demonic_essence',	'demonic_essence.png'],
				['dune_crawler',	'dune_crawler.png'],
				['green_slime',		'green_slime.png'],
				['nagaruda',		'nagaruda.png'],
				['rat',				'rat.png'],
				['scorpion',		'scorpion.png'],
				['skeleton',		'skeleton.png'],
				['snake',			'snake.png'],
				['spider',			'spider.png'],
				['stygian_lizard',	'stygian_lizard.png']
			],
			arrMonsterData: [
				{name: 'Aerocephal',        image: 'aerocephal',        maxHealth: 10},
				{name: 'Arcana Drake',      image: 'arcana_drake',      maxHealth: 20},
				{name: 'Aurum Drakueli',    image: 'aurum_drakueli',    maxHealth: 30},
				{name: 'Bat',               image: 'bat',               maxHealth: 5},
				{name: 'Daemarbora',        image: 'daemarbora',        maxHealth: 10},
				{name: 'Deceleon',          image: 'deceleon',          maxHealth: 10},
				{name: 'Demonic Essence',   image: 'demonic_essence',   maxHealth: 15},
				{name: 'Dune Crawler',      image: 'dune_crawler',      maxHealth: 8},
				{name: 'Green Slime',       image: 'green_slime',       maxHealth: 3},
				{name: 'Nagaruda',          image: 'nagaruda',          maxHealth: 13},
				{name: 'Rat',               image: 'rat',               maxHealth: 2},
				{name: 'Scorpion',          image: 'scorpion',          maxHealth: 2},
				{name: 'Skeleton',          image: 'skeleton',          maxHealth: 6},
				{name: 'Snake',             image: 'snake',             maxHealth: 4},
				{name: 'Spider',            image: 'spider',            maxHealth: 4},
				{name: 'Stygian Lizard',    image: 'stygian_lizard',    maxHealth: 20}
			],
			arrUpgradeButtonsData: [
				{icon: 'dagger',		name: 'Attack',			level: 1,	cost: 5,	purchaseHandler: function(button,player){player.clickDamage += 1}},
				{icon: 'swordIcon1',	name: 'Auto-Attack',	level: 0,	cost: 25,	purchaseHandler: function(button,player){player.dps += 5}}
			]
		};

		console.log("Preloading images...");
		this._preloadImages(SupportData.arrBackgroundImageData,'./assets/parallax_forest_pack/');
		this._preloadImages(SupportData.arrMonsterImageData,'./assets/allacrost_enemy_sprites/');
		this._preloadImages(SupportData.arrItemImageData, './assets/496_RPG_icons/');
		console.log("Preloading images complete!");
		
	}
	create(){
		//this.game.state.start('play');
	}
	_preloadImages(arrImageData,strDirectoryPath){
		var oGame = this.game;
		arrImageData.forEach(function(arrData){
			var strImageID = arrData[0];
			var strImagePath = strDirectoryPath + arrData[1];
			oGame.load.image(strImageID, strImagePath);
		});
	}
}