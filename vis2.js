async function render() {
    // load data
    const data = await d3.csv("./dataset/videogames_long.csv");
  
    // create a bar chart
    const actionData = data.filter((item)=>{return item.genre === "Action"});

    const PCData = data.filter((item)=>{return item.platform === "PC"});

    const StrategyData = data.filter((item)=>{return item.genre === "Strategy"});

    const vlSpec = vl.vconcat( //https://vega.github.io/vega-lite/examples/vconcat_weather.html
    // first chart
    vl
      .markBar({ color: '#423d37' })

      .data(data)
      .encode(
        vl.y().fieldN("genre").sort("-x") .axis({ labelFontSize: 14 }),
        vl.x().fieldQ("global_sales").aggregate("sum")  
        .axis({ labelFontSize: 14 }),
        vl.tooltip().fieldN('genre'),
      )

      .width("container")
      .height(400)
      .title({ text: "Global Video Game Sales by Genre", fontSize:20}),
    // second chart

    vl
      .markBar({ color: '#82786f' })
      .data(actionData)
      .encode(
        vl.y().fieldN("platform").sort("-x") .axis({ labelFontSize: 14 }),
        vl.x().fieldQ("global_sales").aggregate("sum")  
        .axis({ labelFontSize: 14 }),
        vl.tooltip().fieldN('platform'),
      )
      .width("container")
      .height(400)
      .title({ text: "Global Video Game Sales for Action Games by Platform", fontSize:20}),
    //   third chart

    vl
    .markBar({ color: '#423d37' })

    .data(PCData)
    .encode(
      vl.y().fieldN("genre").sort("-x") .axis({ labelFontSize: 14 }),
      vl.x().fieldQ("genre").aggregate("count")  
      .axis({ labelFontSize: 14 }),
      vl.tooltip().fieldN('genre')
    )
      .width("container")
      .height(400)
      .title({ text: "different genere of games avaliable for PC gamers", fontSize:20}),
    //   fourth chart

      vl
      .markBar({ color: '#82786f' })
      .data(StrategyData)
      .encode(
        vl.y().fieldN("platform").sort("-x") .axis({ labelFontSize: 14 }),
        vl.x().fieldQ("platform").aggregate("count")  
        .axis({ labelFontSize: 14 }),
        vl.tooltip().fieldN('platform'),

      )
      .width("container")
      .height(400)
      .title({ text: "Strategy Games Distrubution on Different Platforms", fontSize:20})
    )
      .toSpec();
  
    vegaEmbed("#view", vlSpec).then((result) => {
      const view = result.view;
      view.run();
    });

  }
  
  render();
  