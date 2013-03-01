var PlatformInput = function(entity) {
  this.entity = entity
  this.input = entity.game.input
}

PlatformInput.prototype = {
  tick: function() {
    if(this.input.active('left'))
      this.entity.velx = -1
    if(this.input.active('right'))
      this.entity.velx = 1
    if(this.input.active('jump'))
      this.entity.vely = -10
  }
}

module.exports = PlatformInput
