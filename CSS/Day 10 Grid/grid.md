CSS Grid-
       *Setting a container's display to grid will make all children grid item.
    syntax- container{
        display:grid;
    }

Grid Template -
    They define the lines & track size
       ->grid-template-rows
       ->grid-template-columns

  Repeat-
    ->grid-template-rows:repeat(count,1fr)
    ->grid-template-columns:repeat(count,1fr)
    //1fr means- 1 fraction of 100% 

    eg-(i)grid-template-rows:repeat(2,1fr)
      another way-->grid-template-rows:1fr 1fr

Grid Gaps-
    They define gaps between the lines
      ->row-gap :10px
      ->column-gap:1opx
      ->grid-gap:rowGap columnGap

grid columns -
    Defines an item's starting and ending poition inside the column .

  ->grid-column-start:line_number;
  ->grid-column-end:line_number;

  eg- grid-column:start_col/end_col;


grid rows -
    Defines an item's starting and ending poition inside the rows .

  ->grid-row-start:line_number;
  ->grid-row-end:line_number;

  eg- grid-row:start_row/end_row;
      grid-row:star_row/span number

Properties--
for horizontal-
      *justify-items (container)
      *justify-self(item)
    
for vertical-
    align-items(container)
    align-self(item)

  place-item
  place-self


09-CSS Animation-->
    syntax-
        @keyframe myName{
          from{front-size:20px;}
          to{front-size:40px;}
        }


10-Animation Shorthand
    animation: myName 2s liner 3s infinite normal

11- % in Animation-->
    @keyframes myName{
      0% {}
      25%{}
      50%{}
      100%{}
    }

12-Media Queries
   Help to create a responsive Website . 

   eg-