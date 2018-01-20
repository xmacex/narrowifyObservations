# narrowifyObservations
Reshape "key, value1; value2" lines to "key, value1", "key, value2" lines

The particular usecase for this was to reshape

    citizen, hashtag1; hashtag2
    citizen, hashtag2
    media, hashtag1; hashtag3

to

    citizen, hashtag1
    citizen, hashtag2
    citizen, hashtag2
    media, hashtag1
    media, hashtag3

For use with [RAWGraphs.io](http://app.rawgraphs.io/), particulary alluvial graphs.

<svg width="720" height="520" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0,10)"><g><path class="link" d="M5,197C360,197 360,298 715,298" style="stroke-width: 192; fill: none; stroke: rgb(191, 105, 105); stroke-opacity: 0.4;"><title>2</title></path><path class="link" d="M5,53C360,53 360,48 715,48" style="stroke-width: 96; fill: none; stroke: rgb(191, 105, 105); stroke-opacity: 0.4;"><title>1</title></path><path class="link" d="M5,351C360,351 360,144 715,144" style="stroke-width: 96; fill: none; stroke: rgb(105, 191, 191); stroke-opacity: 0.4;"><title>1</title></path><path class="link" d="M5,447C360,447 360,452 715,452" style="stroke-width: 96; fill: none; stroke: rgb(105, 191, 191); stroke-opacity: 0.4;"><title>1</title></path></g><g><g class="node" transform="translate(715,0)"><rect height="192" width="5" style="fill: rgb(102, 102, 102);"><title> hashtag1
2</title></rect><text x="-6" y="96" dy=".35em" text-anchor="end" style="font-size: 11px; font-family: Arial, Helvetica; pointer-events: none;"> hashtag1</text></g><g class="node" transform="translate(715,202)"><rect height="192" width="5" style="fill: rgb(102, 102, 102);"><title> hashtag2
2</title></rect><text x="-6" y="96" dy=".35em" text-anchor="end" style="font-size: 11px; font-family: Arial, Helvetica; pointer-events: none;"> hashtag2</text></g><g class="node" transform="translate(715,404)"><rect height="96" width="5" style="fill: rgb(102, 102, 102);"><title> hashtag3
1</title></rect><text x="-6" y="48" dy=".35em" text-anchor="end" style="font-size: 11px; font-family: Arial, Helvetica; pointer-events: none;"> hashtag3</text></g><g class="node" transform="translate(0,5)"><rect height="288" width="5" style=""><title>citizen
3</title></rect><text x="11" y="144" dy=".35em" text-anchor="start" style="font-size: 11px; font-family: Arial, Helvetica; pointer-events: none;">citizen</text></g><g class="node" transform="translate(0,303)"><rect height="192" width="5" style=""><title>media
2</title></rect><text x="11" y="96" dy=".35em" text-anchor="start" style="font-size: 11px; font-family: Arial, Helvetica; pointer-events: none;">media</text></g></g></g></svg>