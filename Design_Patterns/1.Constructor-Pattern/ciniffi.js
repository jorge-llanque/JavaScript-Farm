/**
 * The JavaScript constructor pattern allows you to create multiple instances of the same script or plugin.
 * It's particularly useful for things like plugins or libraries where each instance will share
 * many methods and properties in common, but have some differences as well.
 */

var Spells = (function () {
  'use strict';

  /**
   * The constructor object
   */
  var Constructor = function (details){
    // Add properties to this instance
    this.spell = details.spell;
    this.description = details.description;
  }

  /**
   * Cast the spell
   */
  Constructor.prototype.cast = function(){
    alert(this.spell + ':' + this.description);
  };

  // Return the constructor
  return Constructor;
})

getWand.cast();

/**
 * When you create a new instance of Spells(), all of the properties of your constructor are duplicated.
 * Prototype methods, on the other hand, act a reference function.
 * When you instantiate a new instance of your constructor, prototype methods refer to the original
 * rather than being copied, so they take up less memory in the browser.
 * For a small plugin it probably doesn't matter much. For larger projects, it can make a big difference
 * for performance.
 */