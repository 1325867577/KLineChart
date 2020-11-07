/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import RayLine from './RayLine'
import { MousePointOnGraphicType } from './GraphicMark'

export default class VerticalRayLine extends RayLine {
  mousePressedMove (point) {
    if (this._mousePointOnGraphicType === MousePointOnGraphicType.POINT && this._mousePointOnGraphicIndex !== -1) {
      const xPos = this._xAxis.convertFromPixel(point.x)
      this._points[0].xPos = xPos
      this._points[1].xPos = xPos
      this._points[this._mousePointOnGraphicIndex].price = this._yAxis.convertFromPixel(point.y)
    }
  }

  _mouseMoveForDrawingExtendFuc ({ xPos, price }) {
    this._points[0].xPos = xPos
  }

  _generatedDrawLines (xyPoints) {
    const point = { x: xyPoints[0].x, y: 0 }
    if (xyPoints[0].y < xyPoints[1].y) {
      point.y = this._yAxis.height()
    }
    return [[xyPoints[0], point]]
  }
}