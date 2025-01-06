2.flexbox Direction
   ->It shows How flex items are placed in the flux container along which axis and direction.

->flexbox-direction:row;  //main axis, left to right 
->flexbox-direction:row-reverse;  //main axis , right to lef


->flexbox-direction:column;  //main axis , top to bottom. 
->flexbox-direction:column-reverse;  // main axis , bottom to top
 

 3.Justify Content # WORK ON MAIN AXIS
   *Tells how the browser distributes space between and around content items along the main-axis.

->justify-content:flex-start;
->justify-content:flex-end;
->justify-content:flex-center;

->justify-content:space-between;
->justify-content:space-around;
->justify-content:space-evenly;


4.Flex Wrap-
   *sets weatherflux item are forced onto one line, or can wrap onto multiple lines.

->flex-wrap:nowrap;
->flex-wrap:wrap;
->flex-wrap:wrap-reverse; 


   5.Align Items- 
      Distributes our items along the cross axis
->justify-content:flex-start; //element move upper side
->justify-content:flex-end;   // elements move bottom side
->justify-content:flex-center;  // center 


6. Align Content--#work on CROSS AXIS
    -> It sets the distribution of space between and around content item along a flexbox's cross axis.

->align-content:flex-start/flex-end/center;
->align-content:space-between/space-around/evenly;
->align-content: baseline;


   7. Align Self
      ->ALign an item along the Cross Axis.
->align-self:flex-start;

->align-self:flex-end;

->align-self:flex-center;

->align-self:flex-baseline;

  8. Flex Sizing-

  (i) Flex Basis
       *It sets initial main size of a flex item
-> eg-flex-basis:100px; 

   (ii)flex-grow
      *it specifies how much of the flex container's remaining space shouls be assigned to the flex item's main size.

->eg-flex-grow:1 (default)

    (iii)flex-shrink
        *it shrink the container's 
->eg- flex-shrink:1 (default)

9. Flex Shorthand--

*flex-grow| flex-shrink|flex-basis
  flex:2 2 100px;

*flex-grow|flex-basis
  flex:2 100px

*flex-grow(unitless)
  flex:2;

*flex-basis
 flex:100px;