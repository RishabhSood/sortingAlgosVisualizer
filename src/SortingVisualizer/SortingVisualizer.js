import React from 'react';
import { getMergeSortAnimations, getBubbleSortAnimations, getHeapSortAnimations, getQuickSortAnimations, getRadixSortAnimations, getShellSortAnimations, getInsertionSortAnimations, getSelectionSortAnimations } from '../SortingAlgorithms/SortingAlgorithms';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      size: 200,
      onmouse: "all",
      windowSize: window.outerWidth
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray = () => {
    const array = [];
    for (let i = 0; i < this.state.size; i++) {
      array.push(randomIntFromInterval(5, 530));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    const time = animations.length * 5;
    document.getElementById("navbar").style.pointerEvents = "none";
    document.getElementById("navbar").style.opacity = 0.5;
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'blue' : 'pink';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 5);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 5);
      }
    }
    setTimeout(() => {
      document.getElementById("navbar").style.pointerEvents = "all";
      document.getElementById("navbar").style.opacity = 1;
    }, time);
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array, 0, this.state.array.length - 1);
    const time = animations.length;
    document.getElementById("navbar").style.pointerEvents = "none";
    document.getElementById("navbar").style.opacity = 0.5;
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'blue' : 'pink';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 1);
      } else {
        setTimeout(() => {
          const [barOneIdx, barTwoIdx] = animations[i];
          const tempOne = arrayBars[barOneIdx].style.height;
          const tempTwo = arrayBars[barTwoIdx].style.height;
          arrayBars[barOneIdx].style.height = tempTwo;
          arrayBars[barTwoIdx].style.height = tempOne;
        }, i * 1);
      }
    }
    setTimeout(() => {
      document.getElementById("navbar").style.pointerEvents = "all";
      document.getElementById("navbar").style.opacity = 1;
    }, time);
  }

  heapSort() {
    const animations = getHeapSortAnimations(this.state.array);
    const time = 5 * animations.length;
    document.getElementById("navbar").style.pointerEvents = "none";
    document.getElementById("navbar").style.opacity = 0.5;
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = 'blue';
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * 1);
      const colorN = 'pink';
      setTimeout(() => {
        barOneStyle.backgroundColor = colorN;
        barTwoStyle.backgroundColor = colorN;
      }, i * 1);
      setTimeout(() => {
        const [barOneIdx, barTwoIdx] = animations[i];
        const tempOne = arrayBars[barOneIdx].style.height;
        const tempTwo = arrayBars[barTwoIdx].style.height;
        arrayBars[barOneIdx].style.height = tempTwo;
        arrayBars[barTwoIdx].style.height = tempOne;
      }, i * 1);
    }
    setTimeout(() => {
      document.getElementById("navbar").style.pointerEvents = "all";
      document.getElementById("navbar").style.opacity = 1;
    }, time);
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    const time = animations.length;
    document.getElementById("navbar").style.pointerEvents = "none";
    document.getElementById("navbar").style.opacity = 0.5;
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'blue' : 'pink';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 1);
      } else {
        setTimeout(() => {
          const [barOneIdx, barTwoIdx] = animations[i];
          const tempOne = arrayBars[barOneIdx].style.height;
          const tempTwo = arrayBars[barTwoIdx].style.height;
          arrayBars[barOneIdx].style.height = tempTwo;
          arrayBars[barTwoIdx].style.height = tempOne;
        }, i * 1);
      }
    }
    setTimeout(() => {
      document.getElementById("navbar").style.pointerEvents = "all";
      document.getElementById("navbar").style.opacity = 1;
    }, time);
  }

  radixSort() {
    const animations = getRadixSortAnimations(this.state.array);
    const time = animations.length * 1200;
    document.getElementById("navbar").style.pointerEvents = "none";
    document.getElementById("navbar").style.opacity = 0.5;
    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        this.setState({ array: animations[i] });
        const arrayBars = document.getElementsByClassName("array-bar");
        for (let k = 0; k < arrayBars.length; k++)
          arrayBars[k].style.backgroundColor = "black";
      }, i * 600);
      setTimeout(() => {
        const arrayBars = document.getElementsByClassName("array-bar");
        for (let k = 0; k < arrayBars.length; k++)
          arrayBars[k].style.backgroundColor = "pink";
      }, i * 600);
    }
    setTimeout(() => {
      document.getElementById("navbar").style.pointerEvents = "all";
      document.getElementById("navbar").style.opacity = 1;
    }, time);
  }

  shellSort() {
    const animations = getShellSortAnimations(this.state.array);
    const time = animations.length;
    document.getElementById("navbar").style.pointerEvents = "none";
    document.getElementById("navbar").style.opacity = 0.5;
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        const [barOneIdx, value] = animations[i];
        arrayBars[barOneIdx].style.height = `${value}px`;
      }, i * 1);
    }
    setTimeout(() => {
      document.getElementById("navbar").style.pointerEvents = "all";
      document.getElementById("navbar").style.opacity = 1;
    }, time);
  }

  insertionSort() {
    const animations = getInsertionSortAnimations(this.state.array);
    const time = animations.length;
    document.getElementById("navbar").style.pointerEvents = "none";
    document.getElementById("navbar").style.opacity = 0.5;
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        const [barOneIdx, value] = animations[i];
        arrayBars[barOneIdx].style.height = `${value}px`;
      }, i * 1);
    }
    setTimeout(() => {
      document.getElementById("navbar").style.pointerEvents = "all";
      document.getElementById("navbar").style.opacity = 1;
    }, time);
  }

  selectionSort() {
    const animations = getSelectionSortAnimations(this.state.array);
    const time = 5 * animations.length;
    document.getElementById("navbar").style.pointerEvents = "none";
    document.getElementById("navbar").style.opacity = 0.5;
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = 'blue';
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * 5);
      const colorN = 'pink';
      setTimeout(() => {
        barOneStyle.backgroundColor = colorN;
        barTwoStyle.backgroundColor = colorN;
      }, i * 5);
      setTimeout(() => {
        const [barOneIdx, barTwoIdx] = animations[i];
        const tempOne = arrayBars[barOneIdx].style.height;
        const tempTwo = arrayBars[barTwoIdx].style.height;
        arrayBars[barOneIdx].style.height = tempTwo;
        arrayBars[barTwoIdx].style.height = tempOne;
      }, i * 5);
    }
    setTimeout(() => {
      document.getElementById("navbar").style.pointerEvents = "all";
      document.getElementById("navbar").style.opacity = 1;
    }, time);
  }

  render() {
    const { array } = this.state;
    var wid = window.innerWidth / 2;
    wid = wid - 40;
    var size = this.state.array.length;
    return (
      <div>
        <div className="button-container" id="navbar" style={{ pointerEvents: this.state.onmouse }}>
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <label className="rangeLabel">Change array size & speed: </label>
          <input type="range" min="10" max="500" defaultValue="200" id="changeSize" onChange={(e) => this.setState({ size: e.target.value })} style={{ color: "red", cursor: "pointer", marginRight: "0.8rem" }} />
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <button onClick={() => this.quickSort()}>Quick Sort</button>
          <button onClick={() => this.heapSort()}>Heap Sort</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          <button onClick={() => this.radixSort()}>Radix Sort</button>
          <button onClick={() => this.shellSort()}>Shell Sort</button>
          <button onClick={() => this.insertionSort()}>Insertion Sort</button>
          <button onClick={() => this.selectionSort()}>Selection Sort</button>
        </div>
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                width: `${(wid / size)}px`,
                marginLeft: `${(wid / size)}px`,
                backgroundColor: 'pink',
                height: `${value}px`,
              }}></div>
          ))}
          <div class="ui left labeled button" style={{ fontSize: "0.8rem", marginTop: "1rem" }}>
            <a class="ui basic label" style={{ backgroundColor: "black", color: "white" }} href="https://github.com/RishabhSood">
              <i class="github icon"></i> RishabhSood
            </a>
            <a class="ui icon button" href="https://github.com/RishabhSood/sortingAlgosVisualizer">
              <i class="fork icon"></i>
            </a>
          </div>
          <div class="ui left labeled button" style={{ fontSize: "0.8rem" }}>
            <div class="ui basic label" style={{ backgroundColor: "#0072b1", color: "white" }}>
              <i class="linkedin icon"></i> RishabhSood
            </div>
            <a class="ui icon button" href="https://www.linkedin.com/in/rishabh-sood-6312931a1/">
              <i class="user plus icon"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}