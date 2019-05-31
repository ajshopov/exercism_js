
var DnaTranscriber = function(dna){
  this.toRna = function(dna) {
    var solution = '';
    dna.split('').forEach(function(letter){
      switch(letter){
        case 'C': solution += 'G'
          break;
        case 'G': solution += 'C'
          break;
        case 'A': solution += 'U'
          break;
        case 'T': solution += 'A'
          break;
        default:
          throw new Error('Invalid input');
      }
    })
    return solution;
  };
};


module.exports = DnaTranscriber;
