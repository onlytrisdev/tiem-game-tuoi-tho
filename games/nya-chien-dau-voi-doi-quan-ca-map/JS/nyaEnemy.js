// JavaScript Document
var scaleX = 1.3;
var cOffset = {
	x: 0,
	y: -0.5
};
var powerUpTiming = -1;

function garmadon() {

}
var lightSpot = -1;
function nyaEnemy(tDirection, tId, tObj, tTime) {
	this.deathTime = -1;
	this.distance = 3;
	this.direction = tDirection;
	switch (this.direction) {
		case 0: // Coming from top - correlates to "1" in levelpatterndefinitions
			this.startX = this.destX = 0;
			this.startY = cOffset.y + 0.5 + this.distance *2; //cOffset.y+0.5+this.distance*2;
			this.destY = cOffset.y + 0.5 + this.distance;
			break;
		case 1:
			this.startX = 0.5 + this.distance + 1; //0.5+this.distance*2;
			this.destX = 0.5 + this.distance;
			this.startY = this.destY = cOffset.y;

			break;
		case 2:
			this.startX = this.destX = 0;
			this.startY = cOffset.y - 0.5 - this.distance *2; //cOffset.y-0.5-this.distance*2;
			this.destY = cOffset.y - 1 - this.distance;

			break;
		case 3:
			this.startX = -0.5 - this.distance - 1; //-0.5-this.distance*2; 
			this.destX = -0.5 - this.distance;
			this.startY = this.destY = cOffset.y;

			break;
	}
	this.startX *= scaleX;
	this.destX *= scaleX;
	this.id = tId;
	this.obj = tObj;
	//setAnim("SharkFBX_jump",tObj);
	this.startTime = tTime;
	this.update = function (curTime) {
		if (this.deathTime > -1) {

			return;

		}
		if (celebrating) {
			//this.obj.position.set(this.obj.position.x,this.obj.position.y,.3+Math.abs(Math.sin(Date.now()/1000.0)));
			this.startTime = curTime;
			this.obj.rotation.set(Math.PI / 2, Lerp(this.obj.rotation.y, jitter(0), .2), 0);
			return;
		}
		var dTime = 1000.0 * (curTime - this.startTime) / enemyMoveFrequency;

		var zPos = 0.1;
		if (dTime > 1 && this.deathTime === -1) {
			dTime = 0;
			this.distance--;
			if (this.distance > 0) {
				if (this.distance<=1) lightSpot = this.direction;
				switch (this.direction) {
					case 0:
						this.startX = this.destX = 0;
						this.startY = cOffset.y + 0.5 + this.distance + 1;
						this.destY = this.startY - 1; //this.startY;//
						break;
					case 1:
						this.startX = 0.5 + this.distance + 1;
						this.destX = this.startX - 1; //0.5+this.startX -1;
						this.startY = this.destY = cOffset.y;
						break;
					case 2:
						this.startX = this.destX = 0;
						this.startY = cOffset.y - 0.5 - this.distance - 0.5 - 1;
						this.destY = this.startY + 1; //cOffset.y-0.5+this.startY+1;
						//console.log(this.startY+"->"+this.destY);
						break;
					case 3:
						this.startX = -0.5 - this.distance - 1;
						this.destX = this.startX + 1; //-0.5+this.startX +1;
						this.startY = this.destY = cOffset.y;
						break;
				}

				this.obj.rotation.set(Math.PI / 2, jitter((-this.direction) * Math.PI / 2), 0);
				setAnim(baseEnemyName + "_jump", this.obj);
				this.startX *= scaleX;
				this.destX *= scaleX;
				this.startTime = curTime;
			} else {
				if (this.deathTime === -1) {
					this.startX = this.destX;
					this.startY = this.destY;
					particleSystem.makeENEMYParticle(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0));
					celebrating = true;
					//setAnim("NyaFBX_hit",playerObj.obj);
					for (var idx = 0; idx < enemyList.length; idx++) {
						if (this.obj !== enemyList[idx].obj) {
							enemyList[idx].obj.rotation.set(Math.PI / 2, 0, 0);
							setAnim(baseEnemyName + "_celebrate", enemyList[idx].obj);
						} else {
							setAnim(baseEnemyName + "_attack", enemyList[idx].obj);
						}
					}
					setAnim("NyaFBX_hit", playerObj.obj);
					powerUpTiming = Date.now();
					gameState = 10;
				}
			}
		} else {
			//zPos = 0.3+Math.abs(Math.sin(dTime*Math.PI));
			//dTime = (dTime);
		}
		dTime = Math.min(1, dTime * 4);
		this.obj.position.set(this.destX * dTime + this.startX * (1 - dTime), this.destY * dTime + this.startY * (1 - dTime), zPos);

	};
}
//level4Text,headingText
function jitter(inval) {
	return inval + (Math.random() * 0.5 - 0.25);
}

function Lerp(fl1, fl2, delta) {
	return (fl1 * (1 - delta)) + (fl2 * delta);
}
var fxDirections = [new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, -1, 0), new THREE.Vector3(-1, 0, 0)];

function player() {
	// Detect swipes and turn into motions
	this.attacking = -1;

	this.targetAngle = 0;
	this.updatePlayer = function () {

		//var difAngle =  this.targetAngle - this.obj.rotation.y ;
		//if (difAngle>Math.PI/2) difAngle-=2*Math.PI;
		//if (difAngle<-Math.PI) difAngle+=2*Math.PI;

		//this.obj.rotation.set(Math.PI/2, this.obj.rotation.y+difAngle*0.25 ,0);

		if (currentMotion > -1 && !celebrating) {
			this.targetAngle = (-1 - currentMotion) * Math.PI / 2;
			//
			if (this.attacking === -1) {
				//setAnim("NyaFBX_run",this.obj);
			}
			if (this.attacking === -1) {
				if (currentMotion > -1) {
					switch (currentMotion) {
						case 1:

							setAnim("NyaFBX_attack_B", this.obj);
							if (levelNum===6) {
								playSound("SwordHit_0"+(1+rnd(4)));
								roundScores[3]++;
								enemyCount--;
								//console.log("hits left:"+enemyCount+"/"+totalEnemies);
								if (enemyCount===0) {
									powerupObj.chargeLevel=1;
									startPowerupSequence();
								}
								levelMeterObj.chargeLevel = 1.0 * enemyCount / totalEnemies;
								
								setAnim("GarmadonFBX_hit",garmadonObj.obj);
							}
							break;
						case 2:
							setAnim("NyaFBX_attack_L", this.obj);
							
							if (levelNum===6) {
								garmadonObj.obj.currentAnimation = "";
							}
							break;
						case 3:
							setAnim("NyaFBX_attack_F", this.obj);
							if (levelNum===6) {
								garmadonObj.obj.currentAnimation = "";
							}
							break;
						case 4:
							if (levelNum===6) {
								garmadonObj.obj.currentAnimation = "";
							}
							setAnim("NyaFBX_attack_R", this.obj);
							break;
					}
					this.obj.rotation.set(Math.PI / 2, jitter(0), 0);
					particleSystem.makeParticle(fxDirections[currentMotion - 1], new THREE.Vector3(0, 0, 0));
					for (var idx = 0; idx < enemyList.length; idx++) {
						var enemy = enemyList[idx];
						if (enemy.distance < 2.0 && enemy.startTime != -1 && enemy.deathTime < 0) { //&& (Date.now()-lastActionTime)<1
							switch (currentMotion) {
								case 1:
									if (enemy.direction === 0) {
										enemy.deathTime = Date.now() + 500;
									}
									break;
								case 2:
									if (enemy.direction === 1) {
										enemy.deathTime = Date.now() + 500;
									}
									break;
								case 3:
									if (enemy.direction === 2) {
										enemy.deathTime = Date.now() + 500;
									}
									break;
								case 4:
									if (enemy.direction === 3) {
										enemy.deathTime = Date.now() + 500;
									}
									break;

							}
							if (enemy.deathTime > -1) {
								roundScores[scoreIndex%3]++;
								if (levelNum>=6){
									lightSpot = 0;
								} else {
									lightSpot = -1;
								}
								//console.log("hit "+this.attacking );
								setAnim(baseEnemyName + "_hit", enemy.obj);

							}
						}
					}

					this.attacking = Date.now();
					currentMotion = -1;
				}
			}
		}
		if (this.attacking > -1) {
			var dTime = (Date.now() - this.attacking) / 300.0;
			if (dTime > 1) {
				this.attacking = -1;
				this.obj.position = this.basePos;
			} else {
				this.obj.position.set(this.basePos.x, this.basePos.y, 0.1 + Math.sin(dTime * Math.PI) * .5);
			}
		}
	}

}
