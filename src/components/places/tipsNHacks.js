import React from 'react'
import { Accordion, AccordionItem } from 'react-sanfona';


export default class TipsNHacks extends React.Component {
 render () {
         return (
          
         <div id="reviewSection"class="panel panel-default">
            <div class="panel-heading">Tips N Hacks
             <button type="button" class="btn btn-warning btn-xs pull-right">
                      <span class="glyphicon glyphicon-plus"></span>
                    </button>
            </div>
              <div class="panel-body">
                <Accordion>
                  <AccordionItem title="Food" expanded={true}>
                    <div>
                       <ul>
                         <li>Chicken at X restaurent is awsome</li>
                         <li> SeaFood is amazing</li>
                         <li>Chicken at X restaurent is awsome</li>
                         <li> SeaFood is amazing</li>
                         <li>Chicken at X restaurent is awsome</li>
                         <li> SeaFood is amazing</li>
                         <li>Chicken at X restaurent is awsome</li>
                         <li> SeaFood is amazing</li>
                       </ul>
                    </div>
                  </AccordionItem>
                  <AccordionItem title="Adventure Sports" >
                    <div>
                       <ul>
                         <li>Chicken at X restaurent is awsome</li>
                         <li> SeaFood is amazing</li>
                         <li>Chicken at X restaurent is awsome</li>
                         <li> SeaFood is amazing</li>
                       </ul>
                    </div>
                  </AccordionItem>
                  <AccordionItem title="Night Life" >
                    <div>
                       <ul>
                         <li>Chicken at X restaurent is awsome</li>
                         <li> SeaFood is amazing</li>
                         <li>Chicken at X restaurent is awsome</li>
                         <li> SeaFood is amazing</li>
                       </ul>
                    </div>
                  </AccordionItem>
                </Accordion>
            </div>
            <div class="panel-footer" align="center">
              <button type="button" class="btn btn-success btn-md" data-toggle="modal" data-target="">View All</button>
            </div>
          </div>
         
         )
      }
}