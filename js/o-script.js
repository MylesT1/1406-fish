(function() {
"use strict";

var ship = document.getElementById('s-ship');

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);
	
	var btnEstimate = document.getElementById('btn-estimate');
	
	btnEstimate.disabled = true;
	
	ship.addEventListener('change', function() {
	
		if (ship.value === '') {
			btnEstimate.disabled = true;
		} else {
			btnEstimate.disabled = false;
		}
	
	});
});

function estimateTotal(event) {
	event.preventDefault();
	
	if (ship.value === '') {
		alert('Please Select Shipping.');
		
		ship.focus();
	}
	
	var itemGold = parseInt(document.getElementById('txt-q-gold')
							 .value, 10) || 0,
		itemGuppy = parseInt(document.getElementById('txt-q-guppy')
							 .value, 10) || 0,
		itemNeontetra = parseInt(document.getElementById('txt-q-neontetra')
							 .value, 10) || 0,
		itemClown = parseInt(document.getElementById('txt-q-clown')
							 .value, 10) || 0,
          itemTang = parseInt(document.getElementById('txt-q-tang')
							 .value, 10) || 0,
		itemButterfly = parseInt(document.getElementById('txt-q-butterfly')
							 .value, 10) || 0,
		itemAngel = parseInt(document.getElementById('txt-q-angel')
							 .value, 10) || 0,
		itemLion = parseInt(document.getElementById('txt-q-lion')
							 .value, 10) || 0,
          itemEel = parseInt(document.getElementById('txt-q-eel')
							 .value, 10) || 0,
		shippingShip = ship.value,
		shippingMethod = document.querySelector('[name=r_method]:checked')
						     .value || " ";
		
	var totalQty = itemGold + itemGuppy + itemNeontetra + itemClown +itemTang + itemButterfly + itemAngel + itemLion + itemEel,
	     shippingCostPer,
		shippingCost,
		taxFactor = 1,
		estimate,
		totalItemPrice = (9.90 * itemGold) + (11.90 * itemGuppy) +
						 (13.90 * itemNeontetra) + (19.90 * itemClown) + (29.90 * itemTang) + (16.90 * itemButterfly) + (16.90 * itemAngel) + (24.90 * itemLion) + (31.90 * itemEel);
	
	if (shippingShip === 'Next Day') {
		taxFactor = 1.05;
	} else if (shippingShip === 'Same Day') {
		taxFactor = 1.10;
	} else if (shippingShip === 'Free'){
          taxFactor = 0.0;
     }
	
	switch(shippingMethod) {
		case 'consult' :
			shippingCostPer = 0;
			break;
		case 'no' :
			shippingCostPer = 0;
			break;
		default :
			shippingCostPer = 0;
			break;
	}
	
	shippingCost = totalQty;
		
	estimate = '$' + ((totalItemPrice * taxFactor)).toFixed(2);
	
	document.getElementById('txt-estimate').value = estimate;
	
	var results = document.getElementById('results');
	
	results.innerHTML = 'Total items: ' + totalQty + '<br>';
     results.innerHTML += 'Fish Cost: $' + (totalItemPrice).toFixed(2) + '<br>'; 
     results.innerHTML += 'Shipping Fee: $' + (((totalItemPrice * taxFactor) - totalItemPrice)).toFixed(2) + ' (' + shippingShip + ')' + '<br>'; 
     results.innerHTML += 'Grand Total: $' + (totalItemPrice + (((totalItemPrice * taxFactor) - totalItemPrice))).toFixed(2) + '<br>'; 

}

})();// JavaScript Document